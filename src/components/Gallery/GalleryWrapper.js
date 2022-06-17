import styled from "styled-components";

const GalleryWrapper = styled.div`
  .content {
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
`;

export default GalleryWrapper;
