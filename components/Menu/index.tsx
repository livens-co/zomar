import './style.scss'
import Link from 'next/link';
import React from 'react'

interface MenuProps{
  openMenu: boolean;
  closeMenu: () => void;
  navLinks: { name: string; path: string }[];
}

const Menu: React.FC<MenuProps> = ({ openMenu, navLinks, closeMenu }) => {
  
  return (
    <div className="menuOverlay" style={{ top: openMenu ? "0" : "-100vh" }}>
      {navLinks.map((l) => (
        <Link
          href={l.path} 
          key={l.path}
          onClick={closeMenu}
          className="menuLink"
        >
          <p>{l.name}</p>
        </Link>
      ))}
      
    </div>
  )
}

export default Menu