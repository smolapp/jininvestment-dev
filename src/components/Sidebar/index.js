import React, { useState } from "react";
import { SidebarContainer, SidebarWrapper } from "./Styled";
import { NavLink } from "react-router-dom";
import { Wrapper } from "../../GlobalStyled";
import { LINKS } from "../../App";
import "hamburgers/dist/hamburgers.css";

function Sidebar() {
  const [showNav, setShowNav] = useState(false);
  return (
    <SidebarWrapper>
      <button
        className={`hamburger hamburger--3dx ${showNav ? "is-active" : ""}`}
        type="button"
        onClick={() => setShowNav(!showNav)}
      >
        <span className="hamburger-box">
          <span className="hamburger-inner" />
        </span>
      </button>
      <Wrapper>
        <SidebarContainer className={showNav ? "active" : ""}>
          {LINKS.map((link) => {
            const { name, path } = link;
            return (
              <NavLink
                exact
                to={path}
                key={name}
                onClick={() => setShowNav(false)}
              >
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
