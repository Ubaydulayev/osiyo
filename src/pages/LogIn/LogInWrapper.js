import styled from "styled-components";

const LogInWrapper = styled.div`
  background: #363740;
  height: 100vh;
  .content {
    .info {
      padding: 10px 30px;
      border-radius: 10px;
      text-align: center;
      width: 380px;
      height: 582px;
      background-color: white;
      position: absolute;
      top: 18%;
      left: 38%;
      .logo {
        img {
          margin-top: 20px;
        }
        p {
          font-family: "Mulish", sans-serif;
          margin-top: 15px;
          margin-bottom: 0;
          font-style: normal;
          font-weight: 700;
          font-size: 19px;
          line-height: 24px;
          /* identical to box height */
          text-align: center;
          letter-spacing: 0.4px;

          /* sidebar / gray */
          color: #a4a6b3;

          opacity: 0.7;
        }
      }
      .title {
        h2 {
          font-family: "Mulish", sans-serif;
          font-style: normal;
          font-weight: 700;
          font-size: 24px;
          line-height: 30px;
          text-align: center;
          letter-spacing: 0.3px;

          /* grayscale / black */
          color: #252733;
        }
        p {
          font-family: "Mulish", sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 20px;
          /* identical to box height, or 143% */
          text-align: center;
          letter-spacing: 0.3px;

          /* grayscale / gray */
          color: #9fa2b4;
        }
      }
      .logIn {
        margin-top: 30px;
        text-align: start;
        font-size: 12px;
        font-weight: 600;
        label {
          p {
            font-family: "Mulish", sans-serif;
            font-style: normal;
            font-weight: 700;
            font-size: 12px;
            line-height: 15px;
            letter-spacing: 0.3px;
            text-transform: uppercase;

            /* grayscale / gray */
            color: #9fa2b4;
          }
        }
        input {
          border-radius: 8px;
          background: #fcfdfe;
          height: 42px;
          border: 1px solid #f0f1f7;
        }
        .password {
          a {
            text-align: end;
          }
        }
      }
      .btn {
        height: 48px;
        background: #3751ff;
        width: 100%;
        box-shadow: 0px 4px 12px rgba(55, 81, 255, 0.24);
        border-radius: 8px;
        font-family: "Mulish", sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 20px;
        /* identical to box height, or 143% */
        text-align: center;
        letter-spacing: 0.2px;

        /* grayscale / white */
        color: #ffffff;
        margin-bottom: 32px;
      }
      p {
        a {
          text-decoration: none;
          color: #3751ff;
        }
      }
    }
  }
  @media (max-width: 590px) {
    height: 100vh;
    .content {
      .info {
        padding: 10px 30px;
        border-radius: 10px;
        text-align: center;
        width: 323px;
        height: 558px;
        background-color: white;
        position: absolute;
        top: 14%;
        left: 14%;
      }
    }
  }
  @media (max-width: 414px) {
    height: 100vh;
    .content {
      .info {
        padding: 10px 30px;
        border-radius: 10px;
        text-align: center;
        width: 323px;
        height: 558px;
        background-color: white;
        position: absolute;
        top: 14%;
        left: 10%;
      }
    }
  }
`;
export default LogInWrapper;
