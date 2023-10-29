import React from "react";
//import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";
//import url from "url";
import { StripeError } from "@stripe/stripe-js";
import Stripe from "stripe";
const stripe: Stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export async function GET(req: NextRequest, res: NextResponse) {
  const url = new URL(req.url);
  const sessionId = url.searchParams.get("session_id") as string;

  const session = await stripe.checkout.sessions.listLineItems(sessionId);
  return NextResponse.json({ session });
}
