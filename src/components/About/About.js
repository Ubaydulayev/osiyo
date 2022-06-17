import React from "react";
import Container from "../../containers/Container";
import Header from "../../containers/Header";
import AboutWrapper from "./AboutWrapper";

const About = () => {
  return (
    <Container>
      <Header />
      <AboutWrapper>
        <div className="content container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-12">
              <div className="granite">
                <img
                  src="https://sktperfectdemo.com/demos/stone/wp-content/uploads/2019/11/welcome-to-stone.png"
                  alt="granite"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12">
              <div className="info">
                <h2>Welcome to SKT STONE</h2>
                <hr />
                <p>
                  Curabitur lectus nibh, cursus quis turpis eu, viverra laoreet
                  purus. Duis fermentum, metus et sagittis fermentum, massa
                  libero pretium augue, in venenatis risus diam nec tortor.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos. Nam condimentum facilisis
                  iaculis. Sed id est varius, posuere lectus id, molestie risus.
                  Morbi quis nibh sed leo eleifend faucibus. Nullam eget urna
                  non erat rhoncus tincidunt. Etiam non mauris urna torquent per
                  conubia nostra, per inceptos himenaeos. Nam condimentum
                  facilisis iaculis. Sed id est varius, posuere lectus id,
                  molestie risus. Morbi quis nibh sed leo eleifend faucibus.{" "}
                  <br />
                  <br />
                  cursus quis turpis eu, viverra laoreet purus. Duis fermentum,
                  metus et sagittis fermentum, massa libero pretium augue, in
                  venenatis risus diam nec tortor.
                </p>
                <br />
                <button className="btn">READ MORE</button>
              </div>
            </div>
          </div>
        </div>
      </AboutWrapper>
    </Container>
  );
};

export default About;
