import React from "react";
import Container from "../../containers/Container";
import Header from "../../containers/Header";
import ContactWrapper from "./ContactWrapper";

const Contact = () => {
  return (
    <Container>
      <Header />
      <ContactWrapper>
        <div className="content container">
          <div className="row justify-content-between">
            <div className="col-lg-6 col-md-12 col-12 kartaDiv divHover">
              <h3 className="nameH">Karta</h3>
              <hr />
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3053.9497203015435!2d65.98886631538485!3d40.05422297940892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xda45bfc2ad1c1452!2zNDDCsDAzJzE1LjIiTiA2NcKwNTknMjcuOCJF!5e0!3m2!1sru!2s!4v1673845739373!5m2!1sru!2s" loading="lazy" class="w-100 karta" />
            </div>
            <div className="col-lg-5 col-md-12 col-12 contactDiv divHover">
              <h3 className="nameH">Contact Info</h3>
              <hr />
              <p>Donec ultricies mattis nulla Australia</p>
              <p>Phone: +998 88 257 06 33</p>
              <p>Email: elmurodturdiev8@gmail.com</p>
              <p>Website: https://osiyo.granite.uz</p>
              <p className="gr"><a>ASIA Granite Uzbekistan</a></p>
            </div>
          </div>
        </div>
      </ContactWrapper>
    </Container>
  );
};

export default Contact;

