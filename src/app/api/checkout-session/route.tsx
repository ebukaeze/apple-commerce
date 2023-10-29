import React from "react";
import Stripe from "stripe";
import { urlFor } from "../../../../sanity";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-10-16",
});
export async function GET(request: Request) {
  return new Response("hi");
}
export async function POST(req: Request) {
  const items: Product[] = await req.json();
  const origin = req.headers.get("origin") || process.env.NEXT_PUBLIC_BASE_URL;
  console.log(stripe);
  //data format for stripe
  const transformedItems = items.map((item) => ({
    price_data: {
      currency: "usd",
      product_data: {
        name: item.title,
        description: item.description,
        images: [urlFor(item.image[0]).url()],
      },
      unit_amount: item.price * 100,
    },
    quantity: 1,
  }));
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: transformedItems,
      payment_intent_data: {},
      mode: "payment",
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/checkout`,
      metadata: {
        images: JSON.stringify(items.map((item) => item.image[0].asset.url)),
      },
    });
    return NextResponse.json(session);
  } catch (error) {
    if (error instanceof Stripe.errors.StripeError) {
      const { message } = error;
      return NextResponse.json({ message }, { status: error.statusCode });
    }
  }
}
