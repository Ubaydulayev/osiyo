import styled from "styled-components";

const HeaderWrapper = styled.div`
  position: fixed;
  background-color: white;
  background: url("https://sktperfectdemo.com/demos/stone/wp-content/themes/skt-stone/images/default-header-img.jpg");
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 80px;
  top: 0;
  left: 0;
  z-index: 999;
  margin-bottom: 100px;
  .logo {
    a {
      text-decoration: none;
      color: white;
    }
  }
  .desctop {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 24px 0;
    ul {
      margin-left: -160px;
      display: flex;
      align-items: center;
      list-style: none;
      li {
        &:not(:last-child) {
          margin-right: 40px;
        }
        a {
          position: relative;
          font-size: 16px;
          transition: 0.6s;
          line-height: 24px;
          color: white;
          text-decoration: none;
          &::before {
            content: "";
            position: absolute;
            bottom: -2px;
            left: 0;
            width: 0;
            transition: all 0.3s linear;
            transition: 0.6s;
          }
          &:hover {
            color: white;
            border-radius: 10px;
            padding: 10px;
            transition: 0.6s;
            background-color: rgba(0, 0, 0, 0.3);
            &::before {
              width: 100%;
            }
          }
        }
      }
    }
  }
  .box {
    width: 40px;
    height: 40px;
    border: 1px solid black;
    border-radius: 8px;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    img {
      opacity: 0.5;
    }
    font-size: 16px;
    line-height: 24px;
    color: white;
    &:hover {
      border-color: black;
      background-color: white;
      img {
        opacity: 1;
      }
      color: black;
    }
  }
  .burger {
    display: none;
  }
  .mobile {
    display: none;
  }
  .left {
    transform: translateX(-100%);
  }
  @media (max-width: 1000) {
    .desctop {
      ul {
        margin-left: 0;
      }
    }
  }
  @media (max-width: 992px) {
    .desctop {
      padding: 24px 0;
      ul {
        display: none;
      }
    }
    .box {
      border: none;
      background-color: white;
      color: black;
    }
    .logo {
      display: flex;
      justify-content: space-between;
      align-items: center;
      a {
        font-size: 10px;
        color: black;
      }
    }
    .burger {
      display: flex;
      border: none;
      img {
        opacity: 1;
      }
    }
    .mobile {
      display: block;
      position: fixed;
      top: 0;
      left: 0;
      max-width: 450px;
      width: 100%;
      overflow: auto;
      min-height: 600px;
      height: 100vh;
      padding: 50px;
      background-color: white;
      ul {
        list-style: none;
        li {
          margin-top: 40px;
          padding: 12px 0;
          border-bottom: 1px solid #666666;
          transition: 0.6s;
          a {
            font-size: 20px;
            line-height: 24px;
            color: black;
            text-decoration: none;
          }
        }
        li:hover {
          border-radius: 10px;
          padding: 10px;
          transition: 0.6s;
          background-color: rgba(0, 0, 0, 0.3);
        }
      }
    }
  }
`;
export default HeaderWrapper;
