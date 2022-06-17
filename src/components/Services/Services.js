import React from "react";
import Container from "../../containers/Container";
import Header from "../../containers/Header";
import ServicesWrapper from "./ServicesWrapper";

const Services = () => {
  return (
    <Container>
      <Header />
      <ServicesWrapper>
      <div className="content">
            <div className="info container">
              <h2>WHAT WE DO OUT OF STONE</h2>
              <div className="row">
                <div className="col-lg-4 col-md-6 col-12">
                  <div className="more">
                    <img
                      src="https://sktperfectdemo.com/demos/stone/wp-content/uploads/2019/11/whatwedo1.jpg"
                      alt=""
                    />
                    <h4>WORKSHOP</h4>
                    <p>
                      Curabitur lectus nibh, cursus quis turpis eu, viverra
                      laoreet purus. Duis fermentum, metus et sagittis
                      fermentum, massa libero pretium augue.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                  <div className="more">
                    <img
                      src="https://sktperfectdemo.com/demos/stone/wp-content/uploads/2019/11/whatwedo2.jpg"
                      alt=""
                    />
                    <h4>FLOORS</h4>
                    <p>
                      Curabitur lectus nibh, cursus quis turpis eu, viverra
                      laoreet purus. Duis fermentum, metus et sagittis
                      fermentum, massa libero pretium augue.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                  <div className="more">
                    <img
                      src="https://sktperfectdemo.com/demos/stone/wp-content/uploads/2019/11/whatwedo3.jpg"
                      alt=""
                    />
                    <h4>WALLS</h4>
                    <p>
                      Curabitur lectus nibh, cursus quis turpis eu, viverra
                      laoreet purus. Duis fermentum, metus et sagittis
                      fermentum, massa libero pretium augue.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </ServicesWrapper>
    </Container>
  );
};

export default Services;
