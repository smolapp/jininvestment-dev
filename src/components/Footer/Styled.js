import styled from "styled-components";
import { PrimaryColor } from "../../GlobalStyled";

export const FooterWrapper = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 40px;
  color: #fff;
  background-color: ${PrimaryColor};
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    margin: 0;
    text-align: center;
    font-family: Mate, serif;
  }
  a {
    text-decoration: none;
    color: #fff;
  }
`;
