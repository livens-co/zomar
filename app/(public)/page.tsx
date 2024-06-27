import "./style.scss";

export const revalidate = 1;

import Image from "next/image";
import Link from "next/link";
import { Billboard, Category, Product, Project, Subcategory } from "@/types";
import Slider from "@/components/Slider";
import getBillboards from "@/sanity/actions/get-billboards";
import getProductsShop from "@/sanity/actions/get-products-shop";
import ProductCard from "@/components/ProductCard";
import getSubcategoriesByCategory from "@/sanity/actions/get-subcategories";
import SubCategoryCard from "@/components/SubCategoryCard";
import getCategories from "@/sanity/actions/get-categories";
import CategoryCard from "@/components/CategoryCard";
import getProjects from "@/sanity/actions/get-projects";
import ProjectCard from "@/components/ProjectCard";

const HomePage = async () => {
  const billboards: Billboard[] | [] = await getBillboards();
  const products: Product[] | [] = await getProductsShop();
  const categories: Category[] | [] = await getCategories();
  const projects: Project[] = await getProjects();

  const categoriesWithProd = categories.filter(
    (category) => category?.products.length > 0
  );

  return (
    <div className="homePage">
      <Slider data={billboards} />

      {/* O NAMA */}
      <div className="aboutUs">
        <h1>Zomar interijeri</h1>
        <div className="aboutUsRow">
          <div className="image">
            <Image
              src="/test/photo3-min.jpg"
              width={200}
              height={200}
              alt="Zomar interineri"
            />
          </div>
          <div className="text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              officiis, aspernatur nisi totam dolorem cum esse voluptas ipsum
              laboriosam magnam? Rerum quasi assumenda voluptate veritatis
              nesciunt repellendus non, amet quis.
            </p>
          </div>
        </div>
        <div className="aboutUsRow">
          <div className="text">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Excepturi omnis quaerat autem laborum, aspernatur itaque inventore
              praesentium at nemo placeat repellat blanditiis delectus deleniti
              perferendis minima explicabo nobis a nisi.
            </p>
          </div>
          <div className="image">
            <Image
              src="/test/photo3-min.jpg"
              width={200}
              height={200}
              alt="Zomar interineri"
            />
          </div>
        </div>
        <div className="aboutUsRow">
          <div className="image">
            <Image
              src="/test/photo3-min.jpg"
              width={200}
              height={200}
              alt="Zomar interineri"
            />
          </div>
          <div className="text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
              quisquam possimus molestias pariatur maiores ratione omnis totam
              enim adipisci iste itaque fuga labore eius, ad cumque suscipit hic
              rerum? Vitae?
            </p>
          </div>
        </div>
      </div>

      <div className="collections">
        <div className="title">
          <h1>Kategorije</h1>
        </div>
        <div className="collectionsSlider">
          <div className="collectionsSliderContainer">
            {categoriesWithProd
              .map((category) => (
                <CategoryCard
                  category={category}
                  url="kategorije"
                  key={category._id}
                />
              ))
              .slice(0, 8)}
          </div>
        </div>
      </div>

      {/* SPIANA SECTION */}
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
          <Link href="/spiana">Pogledaj kolekciju</Link>
        </div>
      </div>

      {/* OUTLET DIO */}
      <div className="featuredCollection">
        
        <div className="content">
          <div className="title">
            <h1>Outlet</h1>
            <h2>ponuda proizvoda na lageru</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Architecto pariatur tempore, quaerat hic fugit facere rem minima
              quia ex quasi dolorem officiis aspernatur quos nihil et, libero
              molestias ipsum at neque quas magnam, fugiat commodi harum.
              Debitis architecto quam nam qui ipsam deserunt! Magnam
              voluptatibus, consectetur rerum suscipit aut ratione!
            </p>
          </div>
          <Link href="/ponuda">Pogledaj ponudu</Link>
        </div>
        <div className="image">
          <Image
            src="/test/photo3-min.jpg"
            width={200}
            height={400}
            alt="Bahrein"
          />
        </div>
      </div>

      {/* SVI PROIZVODI fetaured početna*/}
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
                .slice(0, 8)}
            </div>
          </div>
        </div>
      </div>

      {/* REFERENCE */}
      <div className="projects">
        <div className="title">
          <h1>Projekti</h1>
        </div>
        <div className="projectsContainer">
          <div className="projectsContainerInner">
            {projects
              .map((project) => (
                <ProjectCard project={project} key={project._id} />
              ))
              .slice(0, 3)}
          </div>
        </div>
        <Link href={'/projekti'} className="projectsLink">Svi projekti</Link>
      </div>

      {/* KATALOZI */}
      <p>katalozi</p>
    </div>
  );
};

export default HomePage;
