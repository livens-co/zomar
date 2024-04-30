import { normalize } from "normalize-diacritics";
import { isUniqueAcrossAllDocuments } from "@/lib/isUniqueAcrossAllDocuments";

const article = {
  name: "article",
  title: "Novosti",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Naslov",
      type: "string",
      required: true,
    },
    {
      name: "slug",
      title: "URL nastavak",
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
      name: "date",
      title: "Datum",
      type: "date",
      options: {
        dateFormat: "D.M.YYYY",
      },
    },
    {
      name: "image",
      title: "Naslovna slika",
      type: "image",
      options: {
        hotspot: true,
      },
      required: true,
    },
    {
      name: "description",
      title: "Kratki opis",
      type: "string",
    },
    {
      name: "body",
      title: "Članak",
      type: "array",
      of: [{ type: "block" }, { type: "image" }],
      required: true,
    },
  ],
};

export default article;
