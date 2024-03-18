import Slider from "@/components/Slider";
import "./style.scss";

import { FaAngleRight } from "react-icons/fa6";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import bahrein1 from "../../../../public/test/bahrein1.jpeg";
import bahrein2 from "../../../../public/test/bahrein2.jpeg";
import bahrein3 from "../../../../public/test/bahrein3.jpeg";
import bahrein4 from "../../../../public/test/bahrein4.jpeg";

const images = [bahrein1, bahrein2, bahrein3, bahrein4];

const CategoryProductPage = () => {
  return (
    <div className="collectionProductPage">
      <header>
        {/* PATH */}
        <div className="path">
          Proizvodi <FaAngleRight /> Porcelux <FaAngleRight />{" "}
          <span>Bahrein</span>
        </div>
        {/* TITLE */}
        <h1>Bahrein</h1>
        {/* COLLECTION NAME */}
        <h3>Kolekcija</h3>
        <div className="collection">
          <h2>Porcelux</h2>
          <p>Excellence in polished and satin matte finish</p>
        </div>
      </header>
      {/* IMAGE CAROUSEL */}
      <Slider data={images} />
      <div className="productDetails">
        {/* PRODUCT SPECIFICATIONS (DIMENSIONS, TECH SPEC, MATERIAL...) */}
        <h3>Podaci o proizvodu</h3>
        <div className="productTabs">
          <Tabs defaultValue="sizes" className="w-[600px] align-middle">
            <TabsList className="tabList align-middle">
              <TabsTrigger value="sizes" className="tabTitle">Dimeznije</TabsTrigger>
              <TabsTrigger value="data" className="tabTitle">Tehnički podaci</TabsTrigger>
              <TabsTrigger value="docs" className="tabTitle">Dokumentacija</TabsTrigger>
            </TabsList>
            <TabsContent value="sizes" className="tabContent">Dimenzije proizvoda</TabsContent>
            <TabsContent value="data" className="tabContent">Tehnički podaci proizvoda</TabsContent>
            <TabsContent value="docs" className="tabContent">Download dokumenti</TabsContent>
          </Tabs>
        </div>
        {/* <p>Dimenzije | Tehnicki podaci | Dokumentacija</p> */}
      </div>
      {/* PRODUCT VARIATIONS (IMAGES) */}
      images
      {/* RECOMMENDED PRODUCTS FORM COLLECTION */}
      <h3>Proizvodi iz kolekcije</h3>
    </div>
  );
};

export default CategoryProductPage;
