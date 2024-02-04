import Link from "next/link";
import "./style.scss";
import Image from "next/image";

const navLinks = [
  // {
  //   name: "Početna",
  //   path: "/",
  // },
  {
    name: "Proizvodi",
    path: "/proizvodi",
  },
  {
    name: "Kolekcije",
    path: "/",
  },
  {
    name: "Outlet",
    path: "/outlet",
  },
  {
    name: "Katalozi",
    path: "/",
  },
  {
    name: "Novosti",
    path: "/",
  },
  {
    name: "Kontakt",
    path: "/",
  },
];

const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <Link href="/" className="logo">
          <Image
            src="/zomarLogo.png"
            width={150}
            height={100}
            alt="Zomar Interijeri"
          />
        </Link>
        <div className="links">
          {navLinks.map((l) => (
            <Link
              href={l.path}
              key={l.path}
              className="navLink"
              // className={`navLink ${pathName === l.path ? 'active' : ''}`}
            >
              {l.name}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
