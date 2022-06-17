import styled from "styled-components";

const FooterWrapper = styled.div`
  background-image: url("https://sktperfectdemo.com/demos/stone/wp-content/themes/skt-stone/images/footer-bg.jpg");
  h3 {
    color: white;
    font-weight: 700;
  }
  p {
    color: gray;
    line-height: 30px;
  }
  hr {
    color: red;
    width: 60px;
    height: 5px;
  }
  .contact {
    p {
      margin: 0;
    }
  }
  .sochial {
    img {
      margin-right: 10px;
    }
  }
  .col-md-6 {
    h5 {
      margin-top: 18px;
    }
  }
`;

export default FooterWrapper;
