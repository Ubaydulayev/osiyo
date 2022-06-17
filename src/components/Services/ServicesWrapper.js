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
        border-radius: 10px;
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
  }
`;

export default ServicesWrapper;
