import React from "react";
import { Nav, NavLink, NavItem } from "reactstrap";
import { ReactComponent as Emergency } from "../icons/24-hours-1.svg";
import { ReactComponent as RDV } from "../icons/042-schedule.svg";
import Styled from "styled-components";

const NameOfLaboratory = Styled.span`

  display : inherit;

  @media (max-width : 768px){
    display : none;
  }
`;

const StyledHeaderNav = Styled.div`

  @media (max-width : 768px){
    display : none;
  }
`;

export const HeaderNav = props => {
  return (
    <div style={{ color: "white", backgroundColor: "green", height: "50px" }}>
      <div className="d-flex bd-highlight">
        <StyledHeaderNav
          className="p-2 flex-grow-1 bd-highlight"
          style={{ textAlign: "left" }}
        >
          <NameOfLaboratory>
            Laboratoire d'Analyses Medicales Fes
          </NameOfLaboratory>
        </StyledHeaderNav>
        <div className="p-2 flex-grow-1 bd-highlight">
          <RDV height="35" width="50" />
          <span> Prendre Rendez-Vous </span>
        </div>
        <div className="p-2 flex-grow-1 bd-highlight">
          <Emergency height="35" width="50" fill="red" stroke-width="4" />
          <span>0635552301</span>
        </div>
      </div>
    </div>
  );
};

const NavItems = items =>
  items.map(item => (
    <NavItem>
      <NavLink href={item.Link}>{item.Text}</NavLink>
    </NavItem>
  ));

const Links = [
  { Link: "#", Text: "Prendre Rendez-vous" },
  { Link: "#", Text: "Laboratoire Fes" },
  { Link: "#", Text: "Urgence" }
];
