import React from "react";
import { HeaderWrapper } from "./Styled";
import { Wrapper } from "../../GlobalStyled";
import { AppContext } from "../../App";

function Header() {
  return (
    <AppContext.Consumer>
      {(context) => (
        <HeaderWrapper>
          <Wrapper>
            <img
              className="logo"
              src={require("../../images/logo.png").default}
              alt="logo"
            />
          </Wrapper>
          <button
            className={`hamburger hamburger--3dx ${
              context.showNav ? "is-active" : ""
            }`}
            type="button"
            onClick={() => context.setShowNav(!context.showNav)}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner" />
            </span>
          </button>
        </HeaderWrapper>
      )}
    </AppContext.Consumer>
  );
}

export default Header;
