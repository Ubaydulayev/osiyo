import React from "react";
import Container from "../../containers/Container";
import Header from "../../containers/Header";
import GalleryWrapper from "./GalleryWrapper";

const Gallery = () => {
  return (
    <Container>
      <Header />
      <GalleryWrapper>
      <div className="content container">
            <div className="info">
              <h2>GALLERY</h2>
              <div className="row">
                <div className="col-lg-3 col-md-6 col-12">
                  <img
                    src="https://sktperfectdemo.com/demos/stone/wp-content/uploads/2017/11/kitchen-1336160_1280.jpg"
                    alt=""
                  />
                  <h4>TITLE HERE</h4>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                  <img
                    src="https://sktperfectdemo.com/demos/stone/wp-content/uploads/2017/11/blog3.jpg"
                    alt=""
                  />
                  <h4>TITLE HERE</h4>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                  <img
                    src="https://sktperfectdemo.com/demos/stone/wp-content/uploads/2017/11/cube-2803223_1280.jpg"
                    alt=""
                  />
                  <h4>TITLE HERE</h4>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                  <img
                    src="https://sktperfectdemo.com/demos/stone/wp-content/uploads/2016/11/gallery3.jpg"
                    alt=""
                  />
                  <h4>TITLE HERE</h4>
                </div>
                {/* 2 */}
                <div className="col-lg-3 col-md-6 col-12">
                  <img
                    src="https://sktperfectdemo.com/demos/stone/wp-content/uploads/2017/11/marble-2362262_1280.jpg"
                    alt=""
                  />
                  <h4>TITLE HERE</h4>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                  <img
                    src="https://sktperfectdemo.com/demos/stone/wp-content/uploads/2017/11/stones-2644164_1920.jpg"
                    alt=""
                  />
                  <h4>TITLE HERE</h4>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                  <img
                    src="https://sktperfectdemo.com/demos/stone/wp-content/uploads/2017/11/wall-2133483_1920.jpg"
                    alt=""
                  />
                  <h4>TITLE HERE</h4>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                  <img
                    src="https://sktperfectdemo.com/demos/stone/wp-content/uploads/2017/11/table-decoration-2756199_1920.jpg"
                    alt=""
                  />
                  <h4>TITLE HERE</h4>
                </div>
              </div>
            </div>
          </div>
      </GalleryWrapper>
    </Container>
  );
};

export default Gallery;
