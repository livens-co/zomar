import Slider from "@/components/Slider";
import "./style.scss";

export const revalidate = 1;

import Image from "next/image";
import Link from "next/link";
import { Article, Billboard, Category, Product, Subcategory } from "@/types";
import getCategories from "@/sanity/actions/get-categories";
import getArticles from "@/sanity/actions/get-articles";
import getBillboards from "@/sanity/actions/get-billboards";
import getProductsShop from "@/sanity/actions/get-products-shop";
import ProductCard from "@/components/ProductCard";
import getProductsBySubcategory from "@/sanity/actions/get-products-by-subcategory";
import getSubcategoriesByCategory from "@/sanity/actions/get-subcategories";
import CategoryCard from "@/components/CategoryCard";

const HomePage = async () => {
  const billboards: Billboard[] | [] = await getBillboards();
  // const categories: Category[] | [] = await getCategories();
  const articles: Article[] | [] = await getArticles();
  const products: Product[] | [] = await getProductsShop();
  const subcategories: Subcategory[] | [] = await getSubcategoriesByCategory(
    "keramika"
  );

  const categoriesWithProd = subcategories.filter(
    (category) => category?.products.length > 0
  );

  return (
    <div className="homePage">
      {/* SLIDER */}
      <Slider data={billboards} />

      {/* O NAMA */}
      <div className="aboutUs">
        {/* LOGO */}
        <div className="logo">
          <Image
            src="/zomarLogo.png"
            width={100}
            height={300}
            alt="Zomar interineri"
          />
        </div>
        {/* TEXT */}
        <div className="text">
          <p>
            Uz savjete našeg stručnog i ljubaznog osoblja nudimo široku paletu
            <span> proizvoda vrhunske kvalitete</span> različitih stilova koji
            će zadovoljiti
            <span> sve vaše želje i potrebe</span>.
          </p>
        </div>
      </div>

      {/* KOLEKCIJE SLIDER -prostoria */}
      <div className="collections">
        <div className="title">
          <h1>Kategorije</h1>
        </div>
        <div className="collectionsSlider">
          {categoriesWithProd
            .map((category) => (
              <CategoryCard
                category={category}
                subcategoryUrl="keramika"
                categoryUrl="kategorije"
                key={category._id}
              />
            ))
            .slice(0, 4)}
        </div>
      </div>

      {/* PREMIUM KOLEKCIJA - prostoria, u sredistu pozornosti */}
      <div className="featuredCollection">
        <div className="image">
          <Image
            src="/test/photo3-min.jpg"
            width={200}
            height={400}
            alt="Bahrein"
          />
        </div>
        <div className="content">
          <div className="title">
            <h1>Spiana</h1>
            <h2>by Zomar Interijeri</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Architecto pariatur tempore, quaerat hic fugit facere rem minima
              quia ex quasi dolorem officiis aspernatur quos nihil et, libero
              molestias ipsum at neque quas magnam, fugiat commodi harum.
              Debitis architecto quam nam qui ipsam deserunt! Magnam
              voluptatibus, consectetur rerum suscipit aut ratione!
            </p>
          </div>
          <Link href="/">Pogledaj kolekciju</Link>
        </div>
      </div>

      {/* SHOP PROIZVODI */}
      <div className="shop">
        <div className="innerContainer">
          <div className="containerTitle">
            <h1>Proizvodi</h1>
          </div>
          <div className="productsContainer">
            <div className="productsContainerInner">
              {products
                .map((product) => (
                  <ProductCard product={product} key={product._id} />
                ))
                .slice(0, 10)}
            </div>
          </div>
        </div>
      </div>

      {/* NOVOSTI */}
      <div className="news">
        <div className="title">
          <h1>Novosti</h1>
        </div>
        <div className="newsSlider">
          {articles.map((article) => (
            <Link
              href={`/novosti/${article.slug}`}
              className="articleCard"
              key={article._id}
            >
              <div className="image">
                <Image
                  src={article.image}
                  width={200}
                  height={400}
                  alt={article.title}
                />
              </div>
              <div className="title">
                <p>{article.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
