import { sanityClient } from "../../../../sanity";
import { groq } from "next-sanity";

// GROQ query
 const duptitle = `*[_type == $type] {
  "duplicates": *[_type == $type && @[$findDups] == ^[$findDups] && _id != ^._id && !(_id in path('drafts.**'))] {_id, $findDups: @[$findDups]}
}[count(duplicates) > 0]

// Params
{
  "type": "category",
  "findDups": "title"
}
`
const query = groq`*[_type == "category"]{
  _id,
    ...
} | order(_createdAt desc)`;


type Data ={
    categories: Category[],
}

export async function GET(request: Request, response: Response) {
   const categories = await sanityClient.fetch(query);
   console.log(JSON.stringify({categories}));

   return new Response(JSON.stringify({categories}));
}