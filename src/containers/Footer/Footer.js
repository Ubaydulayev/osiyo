import React from "react";
import FooterWrapper from "./FooterWrapper";

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="footer py-5">
        <div className="container">
          <div className="footer_box">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-12">
                <h3>LOCAL BUSINESS</h3>
                <hr />
                <p>
                  Quisque et dolor bibendum, finibus tortor ullamcorper enim.
                  Aliquam erat volutpat. Nulla porttitor enim quis cursus.
                  Praesent non sapien vestibulum, convallis aviverra diam. Ut
                  ultrices est nunc tempus egestas. Etia amet commodo libero.
                  Nunc semper urna at velit efficitur, sit amet.
                </p>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="adres">
                  <h3>ADRES</h3>
                  <hr />
                  <p>
                    110807, Янгиюль,
                    <br /> Эски Ковунчи КФЙ,
                    <br /> Кирсадок МФЙ
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="contact">
                  <h3>CONTACT US</h3>
                  <hr />
                  <p>
                    Street 238,52 tempor Donec ultricies mattis nulla, suscipit
                    risus tristique utmattis nulla.
                  </p>
                  <br />
                  <p>Phone: +998 88 257 06 33</p>
                  <p>Email: elmurodturdiev@gmail.com</p>
                  <p>Website: https://osiyo.granite.uz</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="sochial ">
                  <h3>FOLLOW US ON SOCIAL NETWORKS</h3>
                  <hr />
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
