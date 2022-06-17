import styled from "styled-components";

const HeaderWrapper = styled.div`
  .head {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background: url("https://sktperfectdemo.com/demos/stone/wp-content/themes/skt-stone/images/default-header-img.jpg");
    width: 100%;
    height: 290px;
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
  .fas {
    button {
      background: none;
      border: none;
    }
  }
  .mobile {
    ul {
      li {
        margin: 18px;
        text-align: center;
        a {
          margin: 0;
        }
      }
    }
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
  @media (max-width: 590px) {
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
      left: 0;
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
      left: 0;
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
  }
`;

export default HeaderWrapper;
