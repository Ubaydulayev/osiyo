import React from "react";
import HeaderWrapper from "./HeaderWrapper";

const Header = () => {
  return (
    <HeaderWrapper>
      <div className="header">
        <ul>
          <li>
            <h3>Главная</h3>
          </li>

          <li>
            <h3>Виды камней</h3>
          </li>
          <li>
            <h3>Каталок камней</h3>
          </li>
          <li>
            <h3>О заводе</h3>
          </li>
          <li>
            <h3>Контакты</h3>
          </li>
        </ul>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
