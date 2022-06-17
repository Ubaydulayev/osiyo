import React from "react";
import Footer from "../Footer";
import ContainerWrapper from "./ContainerWrapper";

const Container = (props) => {
  return (
    <ContainerWrapper>
      <div className="content">{props.children}</div>
      <Footer />
    </ContainerWrapper>
  );
};

export default Container;
