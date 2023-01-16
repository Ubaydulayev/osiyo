import styled from "styled-components";

const ServicesWrapper = styled.div`
  .content {
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
        margin-left: 20px;
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
  @media (max-width: 1000px) {
    .content {
      .more {
        img {
          max-width: 290px;
        }
      }
    }
  }
  @media (max-width: 765px) {
    .content {
      .more {
        img {
          max-width: 100%;
          margin-left: 60px;
        }
      }
    }
  }

  @media (max-width: 590px) {
    .content {
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
          max-width: 350px;
          border-radius: 10px;
          margin-left: 70px;
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
  }
  @media (max-width: 500px) {
    .content {
      .more {
        img {
          margin-top: 40px;
          max-width: 320px;
          border-radius: 10px;
          margin-left: 70px;
        }
      }
    }
  }
  @media (max-width: 400px) {
    .content {
      .more {
        img {
          margin-top: 40px;
          max-width: 320px;
          border-radius: 10px;
          margin-left: 10px;
        }
      }
    }
  }
`;

export default ServicesWrapper;
