import React, { useState, useRef } from "react";
import "./NavBar.css";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";

function NavBar() {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0px";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  return (
    <div className="navbar">
      <img src={menu_open} onClick={openMenu} alt="" className="nav-mob-open" />
      <ul ref={menuRef} className="nav-menu">
        <img
          src={menu_close}
          onClick={closeMenu}
          alt=""
          className="nav-mob-close"
        />
        <a className="anchor-link" offset={50} href="#home">
          <li>
            <p
              onClick={() => {
                setMenu("home");
              }}
            >
              Home
            </p>
            {menu === "home" ? <hr /> : <></>}
          </li>
        </a>
        <a className="anchor-link" offset={50} href="#about">
          <li>
            <p
              onClick={() => {
                setMenu("about");
              }}
            >
              About Me
            </p>
            {menu === "about" ? <hr /> : <></>}
          </li>
        </a>
        <a className="anchor-link" offset={50} href="#work">
          <li>
            <p
              onClick={() => {
                setMenu("portfolio");
              }}
            >
              Portfolio
            </p>
            {menu === "portfolio" ? <hr /> : <></>}
          </li>
        </a>
        <a className="anchor-link" offset={50} href="#contact">
          <li>
            <p
              onClick={() => {
                setMenu("contact");
              }}
            >
              Contact
            </p>
            {menu === "contact" ? <hr /> : <></>}
          </li>
        </a>
      </ul>
      <div className="nav-connect">
        <a className="anchor-link" offset={50} href="#contact">
          Connect With Me
        </a>
      </div>
    </div>
  );
}

export default NavBar;
