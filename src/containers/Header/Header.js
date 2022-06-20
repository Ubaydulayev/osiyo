import React, { useState } from "react";
import HeaderWrapper from "./HeaderWrapper";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [bars, setbars] = useState(false);
  const toggle = () => setbars(!bars);

  return (
    <HeaderWrapper>
      <div className="container p-0 header d-flex align-items-center justify-content-between">
        <div className="logo">
          <Link to={"/"}>
            <h2>ASIA Granite</h2>
          </Link>
        </div>

        <div className="topMenu">
          <div className="menus">
            <ul className="d-none d-md-none d-lg-flex">
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
          </div>
          <div className="bars d-lg-none d-md-block d-block">
            <button className="btn text-white" onClick={toggle}>
              <FontAwesomeIcon icon={faBars} />
            </button>
            <div className={`nav-menu ${bars ? "w-100" : "d-none"}`}>
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
            </div>
          </div>
        </div>
      </div>
      <div className="head" />
    </HeaderWrapper>
  );
};

export default Header;
