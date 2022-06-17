import React from "react";
import { Link } from "react-router-dom";
import Container from "../../containers/Container";
import HomeWrapper from "./HomeWrapper";

const Home = () => {
  return (
    <Container>
      <HomeWrapper>
        <section className="homeSection">
          <div className="container p-0 header d-flex align-items-center justify-content-between">
            <div className="logo">
              <Link to={"/"}>
                <h2>ASIA Granite</h2>
              </Link>
            </div>

            <div className="topMenu">
              <div className="menus">
                <ul className="d-none d-md-none d-lg-flex">
                  <li className="active">
                    <Link to={"/"}>HOME</Link>
                  </li>
                  <li>
                    <Link to={"/about"}>ABOUT</Link>
                  </li>
                  <li>
                    <Link to={"/services"}>SERVICES</Link>
                  </li>
                  <li>
                    <Link to={"/gallery"}>GALLERY</Link>
                  </li>
                  <li>
                    <Link to={"/contact"}>CONTACT</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="content">
            <div className="title">
              <h1>WE MAKE THINGS OUT OF STONES</h1>
              <button className="btn">READ MORE</button>
            </div>
          </div>
        </section>
        <section className="contents">
          <div className="content1">
            <div className="info">
              <h2>WHAT WE DO OUT OF STONE</h2>
              <div className="row">
                <div className="col-lg-4">
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
                <div className="col-lg-4">
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
                <div className="col-lg-4">
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
          <div className="content2 container">
            <div className="row">
              <div className="col-lg-6">
                <div className="granite">
                  <img
                    src="https://sktperfectdemo.com/demos/stone/wp-content/uploads/2019/11/welcome-to-stone.png"
                    alt="granite"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="info">
                  <h2>Welcome to SKT STONE</h2>
                  <hr />
                  <p>
                    Curabitur lectus nibh, cursus quis turpis eu, viverra
                    laoreet purus. Duis fermentum, metus et sagittis fermentum,
                    massa libero pretium augue, in venenatis risus diam nec
                    tortor. Class aptent taciti sociosqu ad litora torquent per
                    conubia nostra, per inceptos himenaeos. Nam condimentum
                    facilisis iaculis. Sed id est varius, posuere lectus id,
                    molestie risus. Morbi quis nibh sed leo eleifend faucibus.
                    Nullam eget urna non erat rhoncus tincidunt. Etiam non
                    mauris urna torquent per conubia nostra, per inceptos
                    himenaeos. Nam condimentum facilisis iaculis. Sed id est
                    varius, posuere lectus id, molestie risus. Morbi quis nibh
                    sed leo eleifend faucibus. <br />
                    <br />
                    cursus quis turpis eu, viverra laoreet purus. Duis
                    fermentum, metus et sagittis fermentum, massa libero pretium
                    augue, in venenatis risus diam nec tortor.
                  </p>
                  <br />
                  <button className="btn">READ MORE</button>
                </div>
              </div>
            </div>
          </div>
          <div className="content3 ">
            <div className="info">
              <h2>OUR GALLERY</h2>
              <div className="row">
                <div className="col-lg-3 col-md-3">
                  <img
                    src="https://sktperfectdemo.com/demos/stone/wp-content/uploads/2017/11/kitchen-1336160_1280.jpg"
                    alt=""
                  />
                  <h4>TITLE HERE</h4>
                </div>
                <div className="col-lg-3 col-md-3">
                  <img
                    src="https://sktperfectdemo.com/demos/stone/wp-content/uploads/2017/11/blog3.jpg"
                    alt=""
                  />
                  <h4>TITLE HERE</h4>
                </div>
                <div className="col-lg-3 col-md-3">
                  <img
                    src="https://sktperfectdemo.com/demos/stone/wp-content/uploads/2017/11/cube-2803223_1280.jpg"
                    alt=""
                  />
                  <h4>TITLE HERE</h4>
                </div>
                <div className="col-lg-3 col-md-3">
                  <img
                    src="https://sktperfectdemo.com/demos/stone/wp-content/uploads/2016/11/gallery3.jpg"
                    alt=""
                  />
                  <h4>TITLE HERE</h4>
                </div>
                {/* 2 */}
                <div className="col-lg-3 col-md-3">
                  <img
                    src="https://sktperfectdemo.com/demos/stone/wp-content/uploads/2017/11/marble-2362262_1280.jpg"
                    alt=""
                  />
                  <h4>TITLE HERE</h4>
                </div>
                <div className="col-lg-3 col-md-3">
                  <img
                    src="https://sktperfectdemo.com/demos/stone/wp-content/uploads/2017/11/stones-2644164_1920.jpg"
                    alt=""
                  />
                  <h4>TITLE HERE</h4>
                </div>
                <div className="col-lg-3 col-md-3">
                  <img
                    src="https://sktperfectdemo.com/demos/stone/wp-content/uploads/2017/11/wall-2133483_1920.jpg"
                    alt=""
                  />
                  <h4>TITLE HERE</h4>
                </div>
                <div className="col-lg-3 col-md-3">
                  <img
                    src="https://sktperfectdemo.com/demos/stone/wp-content/uploads/2017/11/table-decoration-2756199_1920.jpg"
                    alt=""
                  />
                  <h4>TITLE HERE</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="content6">
            <div className="info">
              <h2>MAKE YOUR MODERN HOME</h2>
            </div>
          </div>
        </section>
      </HomeWrapper>
    </Container>
  );
};

export default Home;
