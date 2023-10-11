import { TfiShoppingCartFull } from "react-icons/tfi";
import { defineField, defineType } from "sanity";



export default{
  name: "productDoc",
  title: "Product",
  description: "A list of products associated with some variants",
  type: "document",
  icon: TfiShoppingCartFull,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: 'title',
        maxLength: 96,
      }
      
    },
    {
      name: 'image',
      title: 'Image',
      type: 'array',
      of: [{ type: 'image'}],
      options: {
        hotspot: true,
      }
    },
    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      to: [{type: "category"}]
     
    }),
    defineField({
       name: "price",
       title: "Price",
       type: "number",
     }),
    defineField({
      name: "description",
      title: "Description",
      type: "text"
    })
   
    
    
  ],

  
};

