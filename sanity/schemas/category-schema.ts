import { normalize } from "normalize-diacritics";
import { isUniqueAcrossAllDocuments } from "@/lib/isUniqueAcrossAllDocuments";

const category = {
  name: "category",
  title: "Kategorije",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Naziv kategorije",
      type: "string",
      required: true,
    },
    {
      name: "slug",
      title: "URL kategorije",
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
    {
      name: "subcategories",
      title: "Podkategorije",
      type: "array",
      of: [{ type: "reference", to: [{ type: "subcategory" }] }],
    },
  ],
};

export default category;