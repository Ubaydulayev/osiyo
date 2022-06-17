import styled from "styled-components";

const GalleryWrapper = styled.div`
  .content {
    padding: 100px 50px;
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
`;

export default GalleryWrapper;
