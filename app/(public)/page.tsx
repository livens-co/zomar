import Slider from "@/components/Slider";
import "./style.scss";

export const revalidate = 1;

import bahrein1 from "../../public/test/bahrein1.jpeg";
import bahrein2 from "../../public/test/bahrein2.jpeg";
import bahrein3 from "../../public/test/bahrein3.jpeg";
import bahrein4 from "../../public/test/bahrein4.jpeg";
import Image from "next/image";
import Link from "next/link";
import { Article, Billboard, Category, Product } from "@/types";
import getCategories from "@/sanity/actions/get-categories";
import getArticles from "@/sanity/actions/get-articles";
import getBillboards from "@/sanity/actions/get-billboards";
import getProductsShop from "@/sanity/actions/get-products-shop";

const HomePage = async () => {
  const billboards: Billboard[] | [] = await getBillboards();
  const categories: Category[] | [] = await getCategories();
  const articles: Article[] | [] = await getArticles();
  const products: Product[] | [] = await getProductsShop();

  const categoriesWithProd = categories.filter(
    (category) => category?.products.length > 0
  );

  return (
    <div className="homePage">
      {/* SLIDER */}
      <Slider data={billboards} />

      {/* O NAMA - prissmacer */}
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
              <Link
                href={`/kategorije/${category.slug}`}
                className="sliderCard"
                key={category._id}
              >
                <div className="image">
                  <Image
                    src={bahrein1}
                    width={200}
                    height={400}
                    alt="Bahrein"
                  />
                </div>
                <div className="title">
                  <h2>{category.title}</h2>
                </div>
              </Link>
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
          <div className="title">
            <h1>Proizvodi</h1>
          </div>
          <div className="productsContainer">
            {products
              .map((product) => (
                <Link
                  href={`/proizvod/${product.slug}`}
                  className="productCard"
                  key={product._id}
                >
                  <div className="image">
                    <Image
                      src={product.images[0].toString()}
                      width={200}
                      height={400}
                      alt="Bahrein"
                    />
                  </div>
                  <div className="content">
                    <h3>{product.title}</h3>
                    <h4>€ {product?.price}</h4>
                  </div>
                </Link>
              ))
              .slice(0, 4)}
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
                  alt="Bahrein"
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
