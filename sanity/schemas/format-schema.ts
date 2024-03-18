import { normalize } from "normalize-diacritics";
import { isUniqueAcrossAllDocuments } from "@/lib/isUniqueAcrossAllDocuments";

const format = {
  name: "format",
  title: "Dimenzije",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Dimenzije",
      type: "string",
      required: true,
    },
    {
      name: "slug",
      title: "URL dimenzije",
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
}

export default format;