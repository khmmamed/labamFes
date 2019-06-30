import React from "react";

import { Row, Col } from "reactstrap";
import { Navbar } from "reactstrap";
import HeaderContainer from "./HeaderContainer";
import { HeaderNav } from "./HeaderNav";
import HeaderNavContainer from "./HeaderNav/HeaderNavContainer";

export const Header = props => (
  <HeaderContainer className={props.class}>
    <HeaderNavContainer className="headernavcontainer">
      header Nav Container
    </HeaderNavContainer>
    <Row style={props.tabs} className={props.tabsClassName}>
      <Navbar fixed="fixed">Laboratoire Fes</Navbar>
    </Row>
  </HeaderContainer>
);
