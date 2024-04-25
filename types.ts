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
  colors: Color[];
  brands: Brand[];
  colorList: string;
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

export interface ProductShop {
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
  colors: Color[];
  brands: Brand[];
  tags: {
    mat: boolean;
    protuklizna: boolean;
    zidna: boolean;
    podna: boolean;
    retificirana: boolean;
    mraz: boolean;
    unutarnja: boolean;
    vanjska: boolean;
    class: string;
  };
}

export interface Category {
  _id: string;
  title: string;
  slug: string;
  products: Product[];
  subcategories: Subcategory[];
}

// export interface Subcategory extends Category {
//   subcategories: Subcategory[];
// }

export interface Subcategory {
  _id: string;
  title: string;
  slug: string;
  products: Product[];
  // categories: Category[];
}

export interface Format {
  _id: string;
  title: string;
  slug: string;
  products: Product[];
}

export interface Brand {
  title: string;
  slug: string;
  products: Product[];
}

export interface Color {
  title: string;
  slug: string;
  products: Product[];
}