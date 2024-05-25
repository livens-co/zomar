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
      {navLinks.map((l, i) => (
        <Link
          href={l.path} 
          key={l.path}
          onClick={closeMenu}
          className="menuLink"
        >
          <span>0{i + 1}</span>
          <p>{l.name}</p>
        </Link>
      ))}
      
    </div>
  )
}

export default Menu