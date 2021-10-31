import React from "react";
import { FooterWrapper } from "./Styled";
import { Wrapper } from "../../GlobalStyled";

function Footer() {
  return (
    <FooterWrapper>
      <Wrapper>
        <p>
          8 Eu Tong Sen Street, #14-89 The Central, Singapore 059818 (Tower 1) |
          t <a href="tel:6713 9670">+65 6713 9670</a> | f +65 6222 8953
        </p>
      </Wrapper>
    </FooterWrapper>
  );
}

export default Footer;
