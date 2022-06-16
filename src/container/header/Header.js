import React from "react";
import HeaderWrapper from "./HeaderWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <HeaderWrapper>
      <div className="shadow bg-black header">
        <div className=" container d-flex justify-content-between align-items-center">
          <div className="logo py-3">
            <img src="https://imperialgranite.uz/wp-content/themes/imperial/assets/img/front-page/menu-logo.png" alt="logo" />
          </div>
          <div className="menu">
            <ul className="d-flex align-items-center">
              <li>
                <a href="/">Главная</a>
              </li>
              <li>
                <a href="/">Виды камней</a>
              </li>
              <li>
                <a href="/">Каталок камней</a>
              </li>
              <li>
                <a href="/">О заводе</a>
              </li>
              <li>
                <a href="/">Контакты</a>
              </li>
            </ul>
          </div>
          <div className="search d-flex d-none">
            <input type="text" className="form-control me-2" />
            <button className="btn btn-dark text-white">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
        </div>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
