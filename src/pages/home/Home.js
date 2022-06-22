import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "../../containers/Container";
import HomeWrapper from "./HomeWrapper";

const Home = () => {
  const [bars, setbars] = useState(false);
  const toggle = () => setbars(!bars);

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
                <ul className="d-lg-flex d-md-none d-none">
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
                  <li>
                    <Link to={"/login"}>LOG IN</Link>
                  </li>
                </ul>
              </div>
              <div className="bars d-lg-none d-md-block d-block">
                <button className="btn text-white me-3" onClick={toggle}>
                  <FontAwesomeIcon icon={faBars} />
                </button>
                <ul className={bars ? "h-100" : "d-none"}>
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
                  <li>
                    <Link to={"/login"}>LOG IN</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="content">
            <div className="title">
              <h1>WE MAKE THINGS OUT OF STONES</h1>
            </div>
          </div>
        </section>
        <section className="contents">
          <div className="content1">
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
          <div className="content2 container">
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
          <div className="content3 container">
            <div className="info">
              <h2>OUR GALLERY</h2>
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
          <div className="content4">
            <div className="info">
              <div className="titles">
                <h2>NEW BATHROOM</h2>
                <h4>COLLECTION</h4>
                <h6>{`VIEW LOOK BOOK > `}</h6>
              </div>
            </div>
          </div>
          <div className="content5 container">
            <div className="info">
              <h2>LATEST NEWS</h2>
              <div className="infor2 d-lg-none d-md-flex d-flex">
                <div className="row">
                  <div className="col-lg-6 col-md-12 col-12">
                    <div className="inform">
                      <span>NOV 11, 2016</span>
                      <h6>Consectetur adipiscing</h6>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec elementum augue vitae mauris accumsan, eu ultrices
                        nisi luctus. Vivamus iaculis molestie scelerisque.
                        Praesent a ante non nulla porttitor blandit ut eget
                        neque. Suspendisse fringilla posuere arcu. Fusce
                        gravida, tortor ac
                      </p>
                      <Link to={"/"} className="fw-bold">{`Read More >`}</Link>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 col-12">
                    <img
                      src="https://sktperfectdemo.com/demos/stone/wp-content/uploads/2017/11/blog1.jpg"
                      alt="foto1"
                      className="img1"
                    />
                  </div>
                  <div className="col-lg-6 col-md-12 col-12">
                    {" "}
                    <div className="inform2">
                      <span>NOV 11, 2016</span>
                      <h6>Lorem ipsum dolor sit amet</h6>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec elementum augue vitae mauris accumsan, eu ultrices
                        nisi luctus. Vivamus iaculis molestie scelerisque.
                        Praesent a ante non nulla porttitor blandit ut eget
                        neque. Suspendisse fringilla posuere arcu. Fusce
                        gravida, tortor ac
                      </p>
                      <Link to={"/"} className="fw-bold">{`Read More >`}</Link>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 col-12">
                    <img
                      src="https://sktperfectdemo.com/demos/stone/wp-content/uploads/2017/11/blog2.jpg"
                      alt="foto1"
                      className="my-5 img2"
                    />
                  </div>
                  <div className="col-lg-6 col-md-12 col-12">
                    {" "}
                    <div className="inform">
                      <span>NOV 11, 2016</span>
                      <h6>Morbi non ante nec lorem</h6>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec elementum augue vitae mauris accumsan, eu ultrices
                        nisi luctus. Vivamus iaculis molestie scelerisque.
                        Praesent a ante non nulla porttitor blandit ut eget
                        neque. Suspendisse fringilla posuere arcu. Fusce
                        gravida, tortor ac
                      </p>
                      <Link to={"/"} className="fw-bold">{`Read More >`}</Link>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-12 col-12">
                    <img
                      src="https://sktperfectdemo.com/demos/stone/wp-content/uploads/2017/11/blog3.jpg"
                      alt="foto1"
                      className="img3"
                    />
                  </div>
                </div>
              </div>
              <div className="infor d-lg-flex d-md-none d-none">
                <div className="row">
                  <div className="col-lg-6 col-md-12 col-12">
                    <div className="inform">
                      <span>NOV 11, 2016</span>
                      <h6>Consectetur adipiscing</h6>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec elementum augue vitae mauris accumsan, eu ultrices
                        nisi luctus. Vivamus iaculis molestie scelerisque.
                        Praesent a ante non nulla porttitor blandit ut eget
                        neque. Suspendisse fringilla posuere arcu. Fusce
                        gravida, tortor ac
                      </p>
                      <Link to={"/"} className="fw-bold">{`Read More >`}</Link>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 col-12">
                    <img
                      src="https://sktperfectdemo.com/demos/stone/wp-content/uploads/2017/11/blog1.jpg"
                      alt="foto1"
                      className="img1"
                    />
                  </div>
                  <div className="col-lg-6 col-md-12 col-12">
                    <img
                      src="https://sktperfectdemo.com/demos/stone/wp-content/uploads/2017/11/blog2.jpg"
                      alt="foto1"
                      className="my-5 img2"
                    />
                  </div>
                  <div className="col-lg-6 col-md-12 col-12">
                    {" "}
                    <div className="inform2">
                      <span>NOV 11, 2016</span>
                      <h6>Lorem ipsum dolor sit amet</h6>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec elementum augue vitae mauris accumsan, eu ultrices
                        nisi luctus. Vivamus iaculis molestie scelerisque.
                        Praesent a ante non nulla porttitor blandit ut eget
                        neque. Suspendisse fringilla posuere arcu. Fusce
                        gravida, tortor ac
                      </p>
                      <Link to={"/"} className="fw-bold">{`Read More >`}</Link>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 col-12">
                    {" "}
                    <div className="inform">
                      <span>NOV 11, 2016</span>
                      <h6>Morbi non ante nec lorem</h6>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec elementum augue vitae mauris accumsan, eu ultrices
                        nisi luctus. Vivamus iaculis molestie scelerisque.
                        Praesent a ante non nulla porttitor blandit ut eget
                        neque. Suspendisse fringilla posuere arcu. Fusce
                        gravida, tortor ac
                      </p>
                      <Link to={"/"} className="fw-bold">{`Read More >`}</Link>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-12 col-12">
                    <img
                      src="https://sktperfectdemo.com/demos/stone/wp-content/uploads/2017/11/blog3.jpg"
                      alt="foto1"
                      className="img3"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content6">
            <div className="info">
              <h2>MAKE YOUR MODERN HOME</h2>
            </div>
          </div>
          <div className="content7">
            <div className="info container">
              <h2>OUR PRODUCTS</h2>
              <div className="ignor1 d-lg-block d-md-block d-none">
                <div className="row">
                  <div className="col-lg-3 col-md-6">
                    <img
                      src="https://sktperfectdemo.com/demos/stone/wp-content/uploads/2019/11/product1.jpg"
                      alt="card1"
                      className="cards card1"
                    />
                    <h3>BOTTOM PLATE</h3>
                    <div className="price">
                      <h4 className="textDec1">£500.00</h4>
                      <h4 className="textDec2">£500.00</h4>
                    </div>
                    <div className="buy">
                      <div className="btn br1">BUY NOW!</div>
                      <div className="btn">ADD TO CART</div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <img
                      src="https://sktperfectdemo.com/demos/stone/wp-content/uploads/2019/11/product2.jpg"
                      alt="card2"
                      className="cards card2"
                    />
                    <h3>KITCHEN</h3>
                    <div className="price">
                      <h4 className="d-none textDec1">£500.00</h4>
                      <h4 className="textDec2">£700.00</h4>
                    </div>
                    <div className="buy">
                      <div className="btn br1">BUY NOW!</div>
                      <div className="btn">ADD TO CART</div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <img
                      src="https://sktperfectdemo.com/demos/stone/wp-content/uploads/2019/11/product3.jpg"
                      alt="card3"
                      className="cards card3"
                    />
                    <h3>BATHROOM</h3>
                    <div className="price">
                      <h4 className="textDec1">£500.00</h4>
                      <h4 className="textDec2">£500.00</h4>
                    </div>
                    <div className="buy">
                      <div className="btn br1">BUY NOW!</div>
                      <div className="btn">ADD TO CART</div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <img
                      src="https://sktperfectdemo.com/demos/stone/wp-content/uploads/2019/11/product4.jpg"
                      alt="card4"
                      className="cards card4"
                    />
                    <h3>WALL PLATE</h3>
                    <div className="price">
                      <h4 className="textDec1">£500.00</h4>
                      <h4 className="textDec2">£500.00</h4>
                    </div>
                    <div className="buy">
                      <div className="btn br1">BUY NOW!</div>
                      <div className="btn">ADD TO CART</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ignor2 d-lg-none d-md-none d-block">
                <div className="row">
                  <div className="col-lg-3 col-md-6">
                    <img
                      src="https://sktperfectdemo.com/demos/stone/wp-content/uploads/2019/11/product1.jpg"
                      alt="card1"
                      className="cards card1"
                    />
                    <h3>BOTTOM PLATE</h3>
                    <div className="price">
                      <h4 className="textDec1">£500.00</h4>
                      <h4 className="textDec2">£500.00</h4>
                    </div>
                    <div className="buy">
                      <div className="btn br1">BUY NOW!</div>
                      <div className="btn">ADD TO CART</div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <img
                      src="https://sktperfectdemo.com/demos/stone/wp-content/uploads/2019/11/product2.jpg"
                      alt="card2"
                      className="cards card2"
                    />
                    <h3>KITCHEN</h3>
                    <div className="price">
                      <h4 className="d-none textDec1">£500.00</h4>
                      <h4 className="textDec2">£700.00</h4>
                    </div>
                    <div className="buy">
                      <div className="btn br1">BUY NOW!</div>
                      <div className="btn">ADD TO CART</div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <img
                      src="https://sktperfectdemo.com/demos/stone/wp-content/uploads/2019/11/product3.jpg"
                      alt="card3"
                      className="cards card3"
                    />
                    <h3>BATHROOM</h3>
                    <div className="price">
                      <h4 className="textDec1">£500.00</h4>
                      <h4 className="textDec2">£500.00</h4>
                    </div>
                    <div className="buy">
                      <div className="btn br1">BUY NOW!</div>
                      <div className="btn">ADD TO CART</div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <img
                      src="https://sktperfectdemo.com/demos/stone/wp-content/uploads/2019/11/product4.jpg"
                      alt="card4"
                      className="cards card4"
                    />
                    <h3>WALL PLATE</h3>
                    <div className="price">
                      <h4 className="textDec1">£500.00</h4>
                      <h4 className="textDec2">£500.00</h4>
                    </div>
                    <div className="buy">
                      <div className="btn br1">BUY NOW!</div>
                      <div className="btn">ADD TO CART</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="buttonAll">
                <button className="btn btn-dark">VIEW ALL PRODUCTS</button>
              </div>
            </div>
          </div>
          <div className="content8">
            <div className="reclama">
              <h2>OUR CLIENT</h2>
              <div className="clients">
                <div className="row justify-content-between">
                  <div className="col-lg-2 col-md-4 col-12">
                    <img
                      src="https://sktperfectdemo.com/demos/stone/wp-content/uploads/2019/11/wp.png"
                      alt=""
                    />
                  </div>
                  <div className="col-lg-2 col-md-4 col-12">
                    <img
                      src="https://sktperfectdemo.com/demos/stone/wp-content/uploads/2019/11/jquery.jpg"
                      alt=""
                      className=""
                    />
                  </div>
                  <div className="col-lg-2 col-md-4 col-12">
                    <img
                      src="https://sktperfectdemo.com/demos/stone/wp-content/uploads/2019/11/woocommerce.jpg"
                      alt=""
                    />
                  </div>
                  <div className="col-lg-2 col-md-4 col-12">
                    <img
                      src="https://sktperfectdemo.com/demos/stone/wp-content/uploads/2019/11/bbpress-client.jpg"
                      alt=""
                    />
                  </div>
                  <div className="col-lg-2 col-md-4 col-12">
                    <img
                      src="https://sktperfectdemo.com/demos/stone/wp-content/uploads/2019/11/mysql.jpg"
                      alt=""
                    />
                  </div>
                  <div className="col-lg-2 col-md-4 col-12">
                    <img
                      src="https://sktperfectdemo.com/demos/stone/wp-content/uploads/2019/11/wp.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </HomeWrapper>
    </Container>
  );
};

export default Home;
