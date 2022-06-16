import styled from "styled-components";

const HeaderWrapper = styled.div`
  a {
    cursor: pointer;
    margin-right: 60px;
    text-decoration: none;
    color: white;
    font-size: 18px;
  }
  .logo {
    width: 100px;
  }
  ul {
    padding: 0 !important;
    margin: 0 !important;
    list-style-type: none;
  }
  a:hover{
    cursor: pointer;
    text-decoration: underline;
  }

  
`;

export default HeaderWrapper;
