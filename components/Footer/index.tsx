import Image from "next/image";
import "./style.scss";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        {/* ZOMAR LOGO */}
        <div className="footerColumn">
          <Link href="/">
            <Image
              src="/zomarLogo.png"
              width={150}
              height={100}
              alt="Zomar Interijeri"
            />
          </Link>
          <div className="links">

          <p>Zomar interijeri d.o.o.</p>
          <p>Križevačka ulica 4A,</p>
          <p>Vrbovec, Hrvatska</p>
          <p>OIB: </p>
          <p>+385 1</p>
          <p>info@zomar.hr</p>
          </div>
        </div>
        {/* ZOMAR INTERIJERI */}
        <div className="footerColumn">
          <h2>Zomar interijeri</h2>
          <div className="links">
            <p>O nama</p>
            <p>Poslovnica</p>
            <p>Nacini placanja</p>
            <p>Cesta pitanja</p>
            <p>pravila privatnosti</p>
            <p>Kolacici</p>

          </div>
        </div>
        {/* KUPCI */}
        <div className="footerColumn">
          <h2>Kupci</h2>
          <div className="links">
            <p>Kategorije</p>
            <p>Novosti</p>
            <p>Spiana</p>
            <p>Outlet</p>
            <p>Katalozi</p>
          </div>
        </div>
        {/* POPULARNO */}
        <div className="footerColumn">
          <h2>Popularno</h2>
          <div className="links">
            <p>Plocice</p>
            <p>Sanitarije</p>
            <p>Ostalo</p>
          </div>
        </div>
      </div>
      <div className="copy">
        <div>Zomar interijeri r 2024 Sva prava pridrzana</div>
        <div>Developed by Livens</div>
      </div>
    </footer>
  );
};

export default Footer;
