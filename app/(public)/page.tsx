import Slider from "@/components/Slider";
import "./style.scss";

export const revalidate = 1;

import bahrein1 from "../../public/test/bahrein1.jpeg";
import bahrein2 from "../../public/test/bahrein2.jpeg";
import bahrein3 from "../../public/test/bahrein3.jpeg";
import bahrein4 from "../../public/test/bahrein4.jpeg";
import Image from "next/image";
import Link from "next/link";

const images = [bahrein1, bahrein2, bahrein3, bahrein4];

const HomePage = async () => {
  return (
    <div className="homePage">
      {/* SLIDER */}
      <Slider data={images} />

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
          <h1>Kolekcije</h1>
        </div>
        <div className="collectionsSlider">
          <div className="sliderCard">
            <div className="image">
              <Image src={bahrein1} width={200} height={400} alt="Bahrein" />
            </div>
            <div className="title">
              <h2>Porcelux</h2>
            </div>
          </div>
          <div className="sliderCard">
            <div className="image">
              <Image src={bahrein2} width={200} height={400} alt="Bahrein" />
            </div>
            <div className="title">
              <h2>Porcelux</h2>
            </div>
          </div>
          <div className="sliderCard">
            <div className="image">
              <Image src={bahrein3} width={200} height={400} alt="Bahrein" />
            </div>
            <div className="title">
              <h2>Porcelux</h2>
            </div>
          </div>
          <div className="sliderCard">
            <div className="image">
              <Image src={bahrein4} width={200} height={400} alt="Bahrein" />
            </div>
            <div className="title">
              <h2>Porcelux</h2>
            </div>
          </div>
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
            <div className="productCard">
              <div className="image">
                <Image src={bahrein1} width={200} height={400} alt="Bahrein" />
              </div>
              <div className="content">
                <h3>Boston Gris 20x60</h3>
                <h4>€ 10.60</h4>
              </div>
            </div>
            <div className="productCard">
              <div className="image">
                <Image src={bahrein1} width={200} height={400} alt="Bahrein" />
              </div>
              <div className="content">
                <h3>Boston Gris 20x60</h3>
                <h4>€ 10.60</h4>
              </div>
            </div>
            <div className="productCard">
              <div className="image">
                <Image src={bahrein1} width={200} height={400} alt="Bahrein" />
              </div>
              <div className="content">
                <h3>Boston Gris 20x60</h3>
                <h4>€ 10.60</h4>
              </div>
            </div>
            <div className="productCard">
              <div className="image">
                <Image src={bahrein1} width={200} height={400} alt="Bahrein" />
              </div>
              <div className="content">
                <h3>Boston Gris 20x60</h3>
                <h4>€ 10.60</h4>
              </div>
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
          <div className="articleCard">
            <div className="image">
              <Image src={bahrein1} width={200} height={400} alt="Bahrein" />
            </div>
            <div className="title">
              <p>
                Zomar Keramika otvara novi odjel veleprodaja sanitarija i
                keramičkih pločica
              </p>
            </div>
          </div>
          <div className="articleCard">
            <div className="image">
              <Image src={bahrein1} width={200} height={400} alt="Bahrein" />
            </div>
            <div className="title">
              <p>
                Zomar Keramika otvara novi odjel veleprodaja sanitarija i
                keramičkih pločica
              </p>
            </div>
          </div>
          <div className="articleCard">
            <div className="image">
              <Image src={bahrein1} width={200} height={400} alt="Bahrein" />
            </div>
            <div className="title">
              <p>
                Zomar Keramika otvara novi odjel veleprodaja sanitarija i
                keramičkih pločica
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
