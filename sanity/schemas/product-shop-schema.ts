import { normalize } from "normalize-diacritics";
import { isUniqueAcrossAllDocuments } from "@/lib/isUniqueAcrossAllDocuments";

const productShop = {
  name: "productsShop",
  title: "Dućan Proizvodi",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Naziv proizvoda",
      type: "string",
      required: true,
    },
    {
      name: "slug",
      title: "URL proizvoda",
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
      name: "description",
      title: "Opis proizvoda",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "images",
      title: "Slike",
      type: "array",
      of: [{ type: "image" }],
    },
    {
      name: "price",
      title: "Cijena",
      type: "number",
    },
    {
      name: "salePrice",
      title: "Akcijska cijena",
      type: "number",
    },
    {
      name: "sku",
      title: "Šifra proizvoda",
      type: "string",
    },
    {
      name: "categories",
      title: "Kategorije",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "category" }],
        },
      ],
    },
    {
      name: "formats",
      title: "Dimenzije",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "format" }],
        },
      ],
    },
    {
      name: "brands",
      title: "Brend",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "brand" }],
        },
      ],
    },
    {
      name: "tags",
      title: "Vrsta pločice",
      type: "object",
      options: {
        collapsible: true,
        collapsed: true,
      },
      fields: [
        { name: "mat", type: "boolean", title: "Mat" },
        { name: "protuklizna", type: "boolean", title: "Protuklizna" },
        { name: "zidna", type: "boolean", title: "Zidna" },
        { name: "podna", type: "boolean", title: "Podna" },
        { name: "retificirana", type: "boolean", title: "Retificirana" },
        { name: "mraz", type: "boolean", title: "Otpornost na mraz" },
        { name: "unutarnja", type: "boolean", title: "Unutarnja" },
        { name: "vanjska", type: "boolean", title: "Vanjska" },
        {
          name: "class",
          title: "Klasa",
          type: "string",
          options: {
            list: [
              { title: "1. klasa", value: "klasa1" },
              { title: "2. klasa", value: "klasa2" },
            ],
          },
        },
      ],
    },
  ],
};

export default productShop;
