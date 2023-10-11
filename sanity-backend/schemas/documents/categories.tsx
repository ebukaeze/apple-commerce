import {TfiClipboard } from 'react-icons/tfi';


export default {
    name: "category",
    title: "Category",
    type: "document",
    icon: TfiClipboard,
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
          source: "title",
          maxLength: 96,
        },
      },
      {
        name: "description",
        title: "Description",
        type: "text",
      },
    ],
  };