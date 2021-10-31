import React from "react";
import { SidebarContainer, SidebarWrapper } from "./Styled";
import { NavLink } from "react-router-dom";
import { Wrapper } from "../../GlobalStyled";
import { LINKS } from "../../App";

function Sidebar() {
  return (
    <SidebarWrapper>
      <Wrapper>
        <SidebarContainer>
          {LINKS.map((link) => {
            const { name, path } = link;
            return (
              <NavLink exact to={path} key={name}>
                {name}
              </NavLink>
            );
          })}
        </SidebarContainer>
      </Wrapper>
    </SidebarWrapper>
  );
}

export default Sidebar;
