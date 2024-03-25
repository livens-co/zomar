import { normalize } from "normalize-diacritics";
import { isUniqueAcrossAllDocuments } from "@/lib/isUniqueAcrossAllDocuments";

const subcategory = {
  name: "subcategory",
  title: "Potkategorije",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Naziv potkategorije",
      type: "string",
      required: true,
    },
    {
      name: "slug",
      title: "URL potkategorije",
      type: "slug",
      options: {
        source: "title",
        isUnique: isUniqueAcrossAllDocuments,
        slugify: async (input: string) => {
          const normalizedInput = await normalize(input);
          return normalizedInput
            .toLowerCase()
            .replace(/[^\w\s-]/g, "")
            .replace(/[\s_]+/g, "-");
        },
      },
      required: true,
    },
    {
      name: "images",
      title: "Slike",
      type: "array",
      of: [{ type: "image" }],
    },
    // {
    //   name: "categories",
    //   title: "Kategorije",
    //   type: "array",
    //   of: [
    //     {
    //       type: "reference",
    //       to: [{ type: "category" }],
    //     },
    //   ],
    // },
  ],
};

export default subcategory;
