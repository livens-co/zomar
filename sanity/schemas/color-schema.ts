import { normalize } from "normalize-diacritics";
import { isUniqueAcrossAllDocuments } from "@/lib/isUniqueAcrossAllDocuments";

const color = {
name: "color",
title: "Boje",
type: "document",
fields: [
  {
    name: "title",
    title: "Boja",
    type: "string",
    required: true,
  },
  {
    name: "slug",
    title: "URL boje",
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
]
}

export default color;