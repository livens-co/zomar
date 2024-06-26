import { normalize } from "normalize-diacritics";
import { isUniqueAcrossAllDocuments } from "@/lib/isUniqueAcrossAllDocuments";

const project = {
  name: "project",
  title: "Projekti",
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
      name: "image",
      title: "Naslovna slika",
      type: "image",
      options: {
        hotspot: true,
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
      name: "description",
      title: "Opis projekta",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};

export default project;
