import Image from "next/image";
import "./style.scss";
import Link from "next/link";
import { BsDot } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        {/* ZOMAR LOGO */}
        <div className="footerColumn">
          <Link href="/" className="logo">
            <Image
              src="/zomarLogo.png"
              width={150}
              height={100}
              alt="Zomar Interijeri"
            />
          </Link>
          <div className="links">
            <h3>Zomar interijeri d.o.o.</h3>
            <p>Križevačka ulica 4A,</p>
            <p>Vrbovec, Hrvatska</p>
            <p>OIB: </p>
            <a href="tel:#">+385 1</a>
            <a href="mailto:info@zomar.hr">info@zomar.hr</a>
          </div>
        </div>
        {/* ZOMAR INTERIJERI */}
        <div className="footerColumn">
          <h2>Zomar Interijeri</h2>
          <div className="links">
            {/* <Link href={'/o-nama'} className="navLink">O nama</Link> */}
            <Link href={"/"} className="navLink">
              Načini plaćanja
            </Link>
            <Link href={"/cesta-pitanja"} className="navLink">
              Česta pitanja
            </Link>
            <Link href={"/politika-privatnosti"} className="navLink">
              Pravila privatnosti
            </Link>
            <Link href={"/politika-privatnosti"} className="navLink">
              Kolačići
            </Link>
          </div>
        </div>
        {/* KUPCI */}
        <div className="footerColumn">
          <h2>Kupci</h2>
          <div className="links">
            <Link href={"/kategorije"} className="navLink">
              Kategorije
            </Link>
            <Link href={"/projekti"} className="navLink">
              Projekti
            </Link>
            <Link href={"/spiana"} className="navLink">
              Spiana
            </Link>
            <Link href={"/katalozi"} className="navLink">
              Katalozi
            </Link>
            <Link href={"/ponuda"} className="navLink">
              Outlet
            </Link>
          </div>
        </div>
        {/* POPULARNO */}
        <div className="footerColumn">
          <h2>Društvene mreže</h2>
          <div className="links">
            <Link href={"#"} className="navLink" target="_blank">
              Instagram
            </Link>
            <Link href={"#"} className="navLink" target="_blank">
              Facebook
            </Link>
          </div>
        </div>
      </div>
      <div className="copy">
        <div>
          &copy; 2024 <BsDot /> Zomar interijeri
        </div>
        <div>
          Developed by{" "}
          <Link href={"https://livens.co/"} target="_blank">
            Livens
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
