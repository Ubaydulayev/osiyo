import styled from "styled-components";

const AboutWrapper = styled.div`
  .content {
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
  @media (max-width: 590px) {
    .content {
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
  }
`;

export default AboutWrapper;
