import { normalize } from "normalize-diacritics";
import { isUniqueAcrossAllDocuments } from "@/lib/isUniqueAcrossAllDocuments";

const product = {
  name: "products",
  title: "Proizvodi",
  type: "document",
  fields: [
    {
      name: "productCategory",
      title: "Vrsta proizvoda",
      type: "string",
      options: {
        list: [
          { title: "Proizvod s cijenom", value: "priceProduct" },
          { title: "Proizvod bez cijene", value: "noPriceProduct" },
        ],
      },
      required: true,
    },
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
      name: "subcategories",
      title: "Potkategorije",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "subcategory" }],
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
      name: "colorList",
      title: "Boje",
      type: "string",
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
      name: "isFeatured",
      title: "Prikazan na početnoj stranici",
      type: "boolean",
    },
    {
      name: "isFeaturedSubcategory",
      title: "Prikazan u potkategoriji",
      type: "boolean",
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
        { name: "sjaj", type: "boolean", title: "Sjaj" },
        { name: "satinado", type: "boolean", title: "Satinado" },
        { name: "klasican", type: "boolean", title: "Klasičan rez" },
        { name: "gres", type: "boolean", title: "Gres" },
        { name: "sugar", type: "boolean", title: "Sugar Effect" },
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

export default product;
