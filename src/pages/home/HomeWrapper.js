import styled from "styled-components";

const HomeWrapper = styled.div`
  .content {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url("https://sktperfectdemo.com/demos/stone/wp-content/themes/skt-stone/images/slides/slider1.jpg");
    width: 100%;
    .title {
      h1 {
        background: rgba(0, 0, 0, 0.3);
        padding: 10px;
        font-weight: 900;
        line-height: normal;
        font-family: "Roboto Condensed";
        font-size: 46px;
        color: #ffffff;
        position: absolute;
        top: 50%;
        left: 31%;
      }
      .btn {
        color: #ffffff;
        position: absolute;
        top: 65%;
        left: 44%;
        line-height: normal;
        font-weight: 600;
        padding: 12px 30px;
        border: 1px solid white;
        border-radius: 0px;
      }
    }
    .btn:hover {
      color: #ff6e26;
      border: 1px solid #ff6e26;
    }
  }

  a {
    cursor: pointer;
    text-decoration: none;
    color: white;
    font-size: 18px;
  }
  ul {
    padding: 0 !important;
    margin: 0 !important;
    list-style-type: none;
  }
  a:hover {
    cursor: pointer;
    color: white;
  }
  li:hover {
    background-color: #350f12;
  }
  .header {
    background: rgba(0, 0, 0, 0.3);

    position: absolute;
    top: 5%;
    left: 10%;

    .logo {
      h2 {
        padding: 22px 24px;
        margin: 0;
        border: 1px solid white;
      }
      img {
        padding: 32px 25px;
      }
    }
    .topMenu {
      /* background-color: rgba(255, 255, 255, 0.2); */
      ul {
        li {
          padding: 29px 24px;
        }
        .active {
          background-color: #350f12;
        }
      }
    }
  }
  .content1 {
    padding-top: 150px;
    padding-bottom: 150px;
    background-color: #f8f8f8;
    h2 {
      color: #373737;
      font-family: "Roboto Condensed", Sans-serif;
      font-size: 30px;
      font-weight: 700;
      text-align: center;
    }
    .more {
      img {
        margin-top: 40px;
        border-radius: 10px;
      }
      h4 {
        margin: 30px 0px;
        text-align: center;
        font-weight: 700;
        color: #373737;
        font-family: "Roboto Condensed", Sans-serif;
      }
      p {
        text-align: center;
      }
    }
  }
  .content2 {
    padding-top: 150px;
    padding-bottom: 150px;
    hr {
      width: 60px;
      color: rgba(0, 0, 0);
      height: 2px;
    }
    .info {
      h2 {
        color: #373737;
        font-family: "Roboto Condensed", Sans-serif;
        font-size: 40px;
        font-weight: 700;
      }
      .btn {
        font-family: "Roboto Condensed", Sans-serif;
        font-size: 14px;
        font-weight: 700;
        fill: #ffffff;
        color: #ffffff;
        background-color: #250506;
        border-radius: 0px 0px 0px 0px;
        padding: 15px 30px;
      }
    }
  }
  .content3 {
    background-color: #f8f8f8;
    padding-top: 150px;
    padding-bottom: 150px;
    .info {
      h2 {
        color: #373737;
        font-family: "Roboto Condensed", Sans-serif;
        font-size: 40px;
        font-weight: 700;
        text-align: center;
      }
      .row {
        img {
          margin-top: 30px;
          width: 100%;
          height: 25vh;
        }
        h4 {
          bottom: 0;
          left: 0;
          right: 0;
          margin: 0 auto;
          text-align: center;
          text-transform: uppercase;
          background: rgba(145, 114, 100, 0.5);
          padding: 10px 5px;
          font-size: 18px;
          font-weight: 700;
          color: #ffffff !important;
        }
      }
    }
  }
  .content4 {
    background-image: url("https://sktperfectdemo.com/demos/stone/wp-content/uploads/2017/11/bathroom-1336164_1920.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 68vh;
    .info {
      padding-top: 150px;
      .titles {
        background-color: rgba(255, 255, 255, 0.8);
        padding: 50px 30px;
        width: 25%;
        margin: auto;
        h2 {
          font: bold 46px/46px "Roboto Condensed";
          text-transform: uppercase;
          letter-spacing: 3px;
          margin-bottom: 15px;
          color: rgba(55, 55, 55, 1) !important;
        }
        h4 {
          font: 600 20px/20px "Roboto Condensed";
          text-transform: uppercase;
          letter-spacing: 5px;
          margin-bottom: 25px;
          text-align: center;
        }
        h6 {
          font: bold 14px/14px "Roboto Condensed";
          text-transform: uppercase;
          letter-spacing: 6px;
          text-align: center;
        }
        h6:hover {
          color: #ff6e26;
        }
      }
    }
  }
  .content6 {
    background-image: url("https://sktperfectdemo.com/demos/stone/wp-content/uploads/2016/11/gallery3.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 68vh;
    h2 {
      text-align: center;
      color: #ffffff;
      padding-top: 150px;
      font-family: "Roboto Condensed", Sans-serif;
      font-size: 64px;
      font-weight: 700;
    }
  }
  @media (max-width: 1260px) {
    .content {
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      background-image: url("https://sktperfectdemo.com/demos/stone/wp-content/themes/skt-stone/images/slides/slider1.jpg");
      width: 100%;
      .title {
        h1 {
          background: rgba(0, 0, 0, 0.3);

          font-weight: 900;
          line-height: normal;
          font-family: "Roboto Condensed";
          font-size: 36px;
          color: #ffffff;
          position: absolute;
          top: 40%;
          right: 20%;
        }
        .btn {
          color: #ffffff;
          position: absolute;
          background: rgba(0, 0, 0, 0.3);
          top: 55%;
          left: 38%;
          line-height: normal;
          font-weight: 600;
          padding: 12px 30px;
          border: 1px solid white;
          border-radius: 0px;
        }
      }
    }
    .content4 {
      background-image: url("https://sktperfectdemo.com/demos/stone/wp-content/uploads/2017/11/bathroom-1336164_1920.jpg");
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      width: 100%;
      height: 68vh;
      .info {
        padding-top: 150px;
        .titles {
          background-color: rgba(255, 255, 255, 0.8);
          padding: 50px 30px;
          width: 80%;
          margin: auto;
          text-align: center;
          h2 {
            font: bold 46px/46px "Roboto Condensed";
            text-transform: uppercase;
            letter-spacing: 3px;
            margin-bottom: 15px;
            color: rgba(55, 55, 55, 1) !important;
          }
          h4 {
            font: 600 20px/20px "Roboto Condensed";
            text-transform: uppercase;
            letter-spacing: 5px;
            margin-bottom: 25px;
            text-align: center;
          }
          h6 {
            font: bold 14px/14px "Roboto Condensed";
            text-transform: uppercase;
            letter-spacing: 6px;
            text-align: center;
          }
          h6:hover {
            color: #ff6e26;
          }
        }
      }
    }
  }
  @media (max-width: 765px) {
    .content1 {
      padding-top: 150px;
      padding-bottom: 150px;
      background-color: #f8f8f8;
      h2 {
        color: #373737;
        font-family: "Roboto Condensed", Sans-serif;
        font-size: 30px;
        font-weight: 700;
        text-align: center;
      }
      .more {
        img {
          margin-top: 40px;
          border-radius: 10px !important;
        }
        h4 {
          margin: 30px 0px;
          text-align: center;
          font-weight: 700;
          color: #373737;
          font-family: "Roboto Condensed", Sans-serif;
        }
        p {
          text-align: center;
        }
      }
    }
    .content4 {
      background-image: url("https://sktperfectdemo.com/demos/stone/wp-content/uploads/2017/11/bathroom-1336164_1920.jpg");
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      width: 100%;
      height: 68vh;
      .info {
        padding-top: 150px;
        .titles {
          background-color: rgba(255, 255, 255, 0.8);
          padding: 50px 30px;
          width: 80%;
          margin: auto;
          text-align: center;
          h2 {
            font: bold 46px/46px "Roboto Condensed";
            text-transform: uppercase;
            letter-spacing: 3px;
            margin-bottom: 15px;
            color: rgba(55, 55, 55, 1) !important;
          }
          h4 {
            font: 600 20px/20px "Roboto Condensed";
            text-transform: uppercase;
            letter-spacing: 5px;
            margin-bottom: 25px;
            text-align: center;
          }
          h6 {
            font: bold 14px/14px "Roboto Condensed";
            text-transform: uppercase;
            letter-spacing: 6px;
            text-align: center;
          }
          h6:hover {
            color: #ff6e26;
          }
        }
      }
    }
  }
  @media (max-width: 590px) {
    .content1 {
      padding-top: 150px;
      padding-bottom: 150px;
      background-color: #f8f8f8;
      h2 {
        color: #373737;
        font-family: "Roboto Condensed", Sans-serif;
        font-size: 28px;
        font-weight: 700;
        text-align: center;
      }
      .more {
        img {
          margin-top: 40px;
          margin-left: 10px;
        }
        h4 {
          margin: 30px 0px;
          text-align: center;
          font-weight: 700;
          color: #373737;
          font-family: "Roboto Condensed", Sans-serif;
        }
        p {
          text-align: center;
        }
      }
    }
    .content2 {
      padding-top: 150px;
      padding-bottom: 150px;
      hr {
        width: 60px;
        color: rgba(0, 0, 0);
        height: 2px;
      }
      .granite {
        img {
          width: 100%;
        }
      }
      .info {
        h2 {
          color: #373737;
          font-family: "Roboto Condensed", Sans-serif;
          font-size: 40px;
          font-weight: 700;
          margin: 20px 0px;
        }
        .btn {
          font-family: "Roboto Condensed", Sans-serif;
          font-size: 14px;
          font-weight: 700;
          fill: #ffffff;
          color: #ffffff;
          background-color: #250506;
          border-radius: 0px 0px 0px 0px;
          padding: 15px 30px;
        }
      }
    }
    .content4 {
      background-image: url("https://sktperfectdemo.com/demos/stone/wp-content/uploads/2017/11/bathroom-1336164_1920.jpg");
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      width: 100%;
      height: 68vh;
      .info {
        padding-top: 150px;
        .titles {
          background-color: rgba(255, 255, 255, 0.8);
          padding: 50px 30px;
          width: 80%;
          margin: auto;
          text-align: center;
          h2 {
            font: bold 46px/46px "Roboto Condensed";
            text-transform: uppercase;
            letter-spacing: 3px;
            margin-bottom: 15px;
            color: rgba(55, 55, 55, 1) !important;
          }
          h4 {
            font: 600 20px/20px "Roboto Condensed";
            text-transform: uppercase;
            letter-spacing: 5px;
            margin-bottom: 25px;
            text-align: center;
          }
          h6 {
            font: bold 14px/14px "Roboto Condensed";
            text-transform: uppercase;
            letter-spacing: 6px;
            text-align: center;
          }
          h6:hover {
            color: #ff6e26;
          }
        }
      }
    }

    .content {
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      background-image: url("https://sktperfectdemo.com/demos/stone/wp-content/themes/skt-stone/images/slides/slider1.jpg");
      width: 100%;
      .title {
        h1 {
          background: rgba(0, 0, 0, 0.3);

          font-weight: 900;
          line-height: normal;
          font-family: "Roboto Condensed";
          font-size: 40px;
          color: #ffffff;
          position: absolute;
          top: 30%;
          right: 20%;
        }
        .btn {
          color: #ffffff;
          position: absolute;
          background: rgba(0, 0, 0, 0.3);
          top: 55%;
          left: 35%;
          line-height: normal;
          font-weight: 600;
          padding: 12px 30px;
          border: 1px solid white;
          border-radius: 0px;
        }
      }
    }
    .header {
      background: rgba(0, 0, 0, 0.3);

      position: absolute;
      top: 5%;
      left: 0%;

      .logo {
        h2 {
          padding: 22px 24px;
          margin: 0;
          border: 1px solid white;
        }
        img {
          padding: 32px 25px;
        }
      }
      .topMenu {
        /* background-color: rgba(255, 255, 255, 0.2); */
        ul {
          li {
            padding: 29px 24px;
          }
          .active {
            background-color: #350f12;
          }
        }
      }
    }
    .content6 {
      background-image: url("https://sktperfectdemo.com/demos/stone/wp-content/uploads/2016/11/gallery3.jpg");
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      width: 100%;
      height: 68vh;
      h2 {
        text-align: center;
        color: #ffffff;
        padding-top: 150px;
        font-family: "Roboto Condensed", Sans-serif;
        font-size: 40px;
        font-weight: 700;
      }
    }
  }

  @media (max-width: 390px) {
    .content {
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      background-image: url("https://sktperfectdemo.com/demos/stone/wp-content/themes/skt-stone/images/slides/slider1.jpg");
      width: 100%;
      .title {
        h1 {
          background: rgba(0, 0, 0, 0.3);

          font-weight: 900;
          line-height: normal;
          font-family: "Roboto Condensed";
          font-size: 40px;
          color: #ffffff;
          position: absolute;
          top: 30%;
          right: 20%;
        }
        .btn {
          color: #ffffff;
          position: absolute;
          background: rgba(0, 0, 0, 0.3);
          top: 55%;
          left: 35%;
          line-height: normal;
          font-weight: 600;
          padding: 12px 30px;
          border: 1px solid white;
          border-radius: 0px;
        }
      }
    }
    .header {
      background: rgba(0, 0, 0, 0.3);

      position: absolute;
      top: 5%;
      left: 0%;

      .logo {
        h2 {
          padding: 22px 24px;
          margin: 0;
          border: 1px solid white;
        }
        img {
          padding: 32px 25px;
        }
      }
      .topMenu {
        /* background-color: rgba(255, 255, 255, 0.2); */
        ul {
          li {
            padding: 29px 24px;
          }
          .active {
            background-color: #350f12;
          }
        }
      }
    }
    .content6 {
      background-image: url("https://sktperfectdemo.com/demos/stone/wp-content/uploads/2016/11/gallery3.jpg");
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      width: 100%;
      height: 68vh;
      h2 {
        text-align: center;
        color: #ffffff;
        padding-top: 150px;
        font-family: "Roboto Condensed", Sans-serif;
        font-size: 35px;
        font-weight: 700;
      }
    }
  }
`;

export default HomeWrapper;
