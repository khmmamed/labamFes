import React from "react";
import { Container } from "reactstrap";

const HeaderContainer = props => {
  const { className } = props;
  return (
    <div class="header">
      <Container className={className}>{props.children}</Container>
    </div>
  );
};

export default HeaderContainer;
