import React from "react";
import FooterWrapper from "./FooterWrapper";

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="footer bg-black py-5">
        <div className="container">
          <div className="footer_box">
            <div className="row">
              <div className="col-lg-3">
                <div className="logo">
                  <img
                    src="https://imperialgranite.uz/wp-content/themes/imperial/assets/img/footer/mainl.png"
                    alt="logo"
                  />
                </div>
              </div>
              <div className="col-lg-3">
                <div className="adres">
                  <h5>Адрес</h5>
                  <p>110807, Янгиюль, Эски Ковунчи КФЙ, Кирсадок МФЙ</p>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="contact">
                  <h5>Контакты</h5>
                  <p>+998 99 840 01 77</p>
                  <p>+998 90 925 84 73</p>
                  <p>+998 99 818 30 64</p>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="sochial ">
                  <h5>Соц. сети</h5>
                  <img
                    src="https://imperialgranite.uz/wp-content/themes/imperial/assets/img/footer/facebook.png"
                    alt="facebook"
                  />
                  <img
                    src="https://imperialgranite.uz/wp-content/themes/imperial/assets/img/footer/inst.png"
                    alt="insta"
                  />
                  <img
                    src="https://imperialgranite.uz/wp-content/themes/imperial/assets/img/footer/telegram.png"
                    alt="tg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
