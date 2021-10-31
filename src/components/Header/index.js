import React from "react";
import { HeaderWrapper } from "./Styled";
import { Wrapper } from "../../GlobalStyled";

function Header() {
  return (
    <HeaderWrapper>
      <Wrapper>
        <img
          className="logo"
          src={require("../../images/logo.png").default}
          alt="logo"
        />
      </Wrapper>
    </HeaderWrapper>
  );
}

export default Header;
