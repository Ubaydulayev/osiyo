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
        background: rgba(0, 0, 0, 0.3);
        top: 65%;
        left: 44%;
        line-height: normal;
        font-weight: 600;
        padding: 12px 30px;
        border: 1px solid white;
        border-radius: 0px;
      }
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
    padding: 120px 220px;
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
    padding: 100px 50px;
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
    padding: 100px 220px;
    background-color: #f8f8f8;
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
`;

export default HomeWrapper;
