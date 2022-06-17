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
`;

export default HeaderWrapper;
