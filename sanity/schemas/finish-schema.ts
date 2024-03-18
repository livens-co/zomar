import { normalize } from "normalize-diacritics";
import { isUniqueAcrossAllDocuments } from "@/lib/isUniqueAcrossAllDocuments";

const finish = {
name: "finish",
title: "Vrsta pločice",
type: "document",
fields: [
  {
    name: "title",
    title: "Vrsta pločice",
    type: "string",
    required: true,
  },
  {
    name: "slug",
    title: "URL vrste pločice",
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

export default finish;