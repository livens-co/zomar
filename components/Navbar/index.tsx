"use client";

import Link from "next/link";
import "./style.scss";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Menu from "../Menu";
import { useState } from "react";

const navLinks = [
  {
    name: "Početna",
    path: "/",
  },
  {
    name: "Proizvodi",
    path: "/kategorije",
  },
  {
    name: "Spiana",
    path: "/",
  },

  {
    name: "Novosti",
    path: "/novosti",
  },
  {
    name: "Kontakt",
    path: "/kontakt",
  },
  {
    name: "Outlet",
    path: "/ponuda",
  },
];

const Navbar = () => {
  const pathName = usePathname();
  const [openMenu, setOpenMenu] = useState(false);

  const closeMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
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
                // className="navLink"
                className={`navLink ${pathName === l.path ? "active" : ""}`}
              >
                {l.name}
              </Link>
            ))}
          </div>
          <div
            // className="menuButton"
            className={openMenu ? "menuButton activeButton" : "menuButton "}
            onClick={() => setOpenMenu(!openMenu)}
          >
            <div />
            <div />
            <div />
          </div>
        </nav>
      </div>
      <Menu openMenu={openMenu} closeMenu={closeMenu} navLinks={navLinks} />
    </>
  );
};

export default Navbar;
