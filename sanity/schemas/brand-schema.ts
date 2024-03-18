import { normalize } from "normalize-diacritics";
import { isUniqueAcrossAllDocuments } from "@/lib/isUniqueAcrossAllDocuments";

const brand = {
  name: "brand",
  title: "Brend",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Naziv brenda",
      type: "string",
      required: true,
    },
    {
      name: "slug",
      title: "URL brenda",
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
  ],
};

export default brand;
