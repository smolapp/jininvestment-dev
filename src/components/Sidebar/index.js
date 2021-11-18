import React, { useState } from "react";
import { SidebarContainer, SidebarWrapper } from "./Styled";
import { NavLink } from "react-router-dom";
import { Wrapper } from "../../GlobalStyled";
import { AppContext, LINKS } from "../../App";
import "hamburgers/dist/hamburgers.css";

function Sidebar() {
  return (
    <AppContext.Consumer>
      {(context) => (
        <SidebarWrapper>
          <Wrapper>
            <SidebarContainer className={context.showNav ? "active" : ""}>
              {LINKS.map((link) => {
                const { name, path } = link;
                return (
                  <NavLink
                    exact
                    to={path}
                    key={name}
                    onClick={() => context.setShowNav(false)}
                  >
                    {name}
                  </NavLink>
                );
              })}
            </SidebarContainer>
          </Wrapper>
        </SidebarWrapper>
      )}
    </AppContext.Consumer>
  );
}

export default Sidebar;
