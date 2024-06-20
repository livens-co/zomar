import { PortableTextBlock } from "sanity";

export interface Product {
  _id: string;
  productCategory: string;
  title: string;
  slug: string;
  description: PortableTextBlock[];
  images: string[];
  price: number;
  salePrice: number;
  sku: string;
  categories: Category[];
  subcategories: Subcategory[];
  formats: Format[];
  brands: Brand[];
  colorList: string;
  isFeatured: boolean;
  tags: {
    mat: boolean;
    protuklizna: boolean;
    zidna: boolean;
    podna: boolean;
    retificirana: boolean;
    mraz: boolean;
    unutarnja: boolean;
    vanjska: boolean;
    sjaj: boolean;
    satinado: boolean;
    klasican: boolean;
    gres: boolean;
    sugar: boolean;
    class: string;
  };
}

export interface Category {
  _id: string;
  title: string;
  slug: string;
  image: string;
  description: PortableTextBlock[];
  products: Product[];
  subcategories: Subcategory[];
}

export interface Subcategory {
  _id: string;
  title: string;
  slug: string;
  image: string;
  description: PortableTextBlock[];
  products: Product[];
}

export interface Format {
  _id: string;
  title: string;
  slug: string;
  products: Product[];
}

export interface Brand {
  _id: string;
  title: string;
  slug: string;
  products: Product[];
}

export interface Article {
  _id: string;
  title: string;
  slug: string;
  date: string;
  image: string;
  description: string;
  body: PortableTextBlock[];
}

export interface Project {
  _id: string;
  title: string;
  description: PortableTextBlock[];
  slug: string;
  image: string;
  images: string[];
}

export interface Billboard {
  _id: string;
  title: string;
  image: string;
  description: string;
}