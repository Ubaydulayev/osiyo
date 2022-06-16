import React from "react";
import HeaderWrapper from "./HeaderWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { Fade, Slide, Zoom } from "react-awesome-reveal";

class Header extends React.Component {
  state = { phoneHeader: true };

  toggleHeader = () => {
    this.setState((state) => {
      return {
        phoneHeader: !state.phoneHeader,
      };
    });
  };

  render() {
    return (
      <HeaderWrapper>
        <div className="shadow bg-black header">
          <div className=" container d-flex flex-wrap justify-content-between align-items-center">
            <div className="logo py-3">
              <img
                src="https://imperialgranite.uz/wp-content/themes/imperial/assets/img/front-page/menu-logo.png"
                alt="logo"
              />
            </div>
            <div className="menu">
              <ul className="d-lg-flex d-none align-items-center">
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
            <div className="d-lg-none fas d-block">
              <button
                className="btn btn-dark text-white"
                onClick={this.toggleHeader}
              >
                <FontAwesomeIcon icon={faBars} className="bars" />
              </button>
            </div>
            <div
              className={`w-100 d-lg-none d-block mobile ${
                (this.state.phoneHeader && "d-none") || ""
              } `}
            >
              <Slide direction="down">
                <ul>
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
              </Slide>
            </div>
          </div>
        </div>
      </HeaderWrapper>
    );
  }
}

export default Header;
