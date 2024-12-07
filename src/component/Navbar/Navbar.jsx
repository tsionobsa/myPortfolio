import React, { useState,useRef } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import underline from '../../assets/nav_underline.svg';
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {
  const [menu, setMenu] = useState();

  const menuRef = useRef();
  
  const openMenu =()=> {
    menuRef.current.style.right="0";

  }

  const closeMenu = () => {
    menuRef.current.style.right="350px";
  }

  // Scroll function
  const handleScroll = (target) => {
    setMenu(target);
    const element = document.getElementById(target); // Find the section by id
    if (element) {
      element.scrollIntoView({ behavior: "smooth" }); // Smooth scrolling
    }
  };
  return (
    <div className="navbar">
      <img src={logo} alt="Logo" />
      <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open'/>
      <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
      <ul className="nav-menu">
        <li>
          <p onClick={() => handleScroll("home")}>Home</p>
          {menu === "home" ? <img src={underline} alt="underline" /> : null}
        </li>
        <li>
          <p onClick={() => handleScroll("about")}>About Me</p>
          {menu === "about" ? <img src={underline} alt="underline" /> : null}
        </li>
        <li>
          <p onClick={() => handleScroll("services")}>Services</p>
          {menu === "services" ? <img src={underline} alt="underline" /> : null}
        </li>
        <li>
          <p onClick={() => handleScroll("portfolio")}>Portfolio</p>
          {menu === "portfolio" ? <img src={underline} alt="underline" /> : null}
        </li>
        <li>
          <p onClick={() => handleScroll("contact")}>Contact</p>
          {menu === "contact" ? <img src={underline} alt="underline" /> : null}
        </li>
      </ul>
      <div onClick={() => handleScroll("contact")}className="nav-connect">Connect With Me</div>
    </div>
  );
};

export default Navbar;
