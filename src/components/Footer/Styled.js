import styled from "styled-components";
import { PrimaryColor } from "../../GlobalStyled";

export const FooterWrapper = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  color: #fff;
  background-color: ${PrimaryColor};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 0;
  p {
    margin: 0;
    text-align: center;
    font-size: 11px;
    font-family: "Open Sans", sans-serif;
  }
  a {
    text-decoration: none;
    color: #fff;
  }
`;
