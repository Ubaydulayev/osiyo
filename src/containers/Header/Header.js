import React, { useState, useRef } from "react";
import HeaderWrapper from "./HeaderWrapper";
import { Link } from "react-router-dom";

import { BURGER, X } from "../../assets/icon_path";

const Header = () => {
  const [bars, setbars] = useState(false);
  const toggle = () => setbars(!bars);
  const burgerRef = useRef();
  const menu = () => {
    burgerRef.current.classList.toggle("left");
  };

  return (
    <HeaderWrapper>
      <div className="container">
        <header className="desctop">
          <div className="logo">
            <Link to={"/"}>
              <h2>ASIA Granite Uzbekistan</h2>
            </Link>
          </div>
          <ul>
            <li>
              <Link to={"/"}>HOME</Link>
            </li>
            <li>
              <Link to={"/about"}>ABOUT</Link>
            </li>
            <li>
              <Link to={"/services"}>SERVICES</Link>
            </li>
            <li>
              <Link to={"/gallery"}>GALLERY</Link>
            </li>
            <li>
              <Link to={"/contact"}>CONTACT</Link>
            </li>
          </ul>
          <div className="box burger" onClick={menu}>
            <img src={BURGER} alt="open" />
          </div>
        </header>
      </div>
      <header className="mobile left" ref={burgerRef} onClick={menu}>
        <div className="logo">
          <Link to={"/"}>
            <h3>ASIA Granite Uzbekistan</h3>
          </Link>
          <img src={X} alt="close" />
        </div>
        
        <ul>
          <li>
            <Link to={"/"}>HOME</Link>
          </li>
          <li>
            <Link to={"/about"}>ABOUT</Link>
          </li>
          <li>
            <Link to={"/services"}>SERVICES</Link>
          </li>
          <li>
            <Link to={"/gallery"}>GALLERY</Link>
          </li>
          <li>
            <Link to={"/contact"}>CONTACT</Link>
          </li>
        </ul>
      </header>
    </HeaderWrapper>
  );
};

export default Header;
