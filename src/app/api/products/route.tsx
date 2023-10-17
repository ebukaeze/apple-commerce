import { sanityClient } from "../../../../sanity";
import { groq } from "next-sanity";

// GROQ query
const query = groq`*[_type == "productDoc"]{
  _id,
    ...
} | order(_createdAt asc)`;


type Data ={
    products: Product[],
}

export async function GET(request: Request, response: Response) {
   const products = await sanityClient.fetch(query);

   return new Response(JSON.stringify({products}));
}