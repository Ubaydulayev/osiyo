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
          <div className="row">
            <div className="col-lg-6">
              <h1>Karta</h1>
            </div>
            <div className="col-lg-6">
              <h3>Contact Info</h3>
              <p>Donec ultricies mattis nulla Australia</p>
            </div>
          </div>
        </div>
      </ContactWrapper>
    </Container>
  );
};

export default Contact;
