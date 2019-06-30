import React from "react";
import Styled from "styled-components";
import { ReactComponent as Logo } from "../icons/logo.svg";

const StyledHeaderInfo = Styled.div`
  min-height: 65px
  z-index : 99;
`;

//Styling Logo Div
const StyledLogo = Styled.div`
 text-align : left;
 padding : 30px 0 0 120px;
 `;

export const HeaderInfo = ({ ...props }) => (
  <StyledHeaderInfo>
    <StyledLogo>
      <Logo height="120px" width="120px" />{" "}
    </StyledLogo>
  </StyledHeaderInfo>
);
