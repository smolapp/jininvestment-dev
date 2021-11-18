import styled from "styled-components";
import { MobileWidth, PrimaryColor } from "../../GlobalStyled";

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding-top: 40px;
  padding-bottom: 40px;
  background: linear-gradient(
    to bottom,
    #fff 0%,
    #fff 80%,
    rgba(255, 255, 255, 0.05) 100%
  );
  z-index: 10;
  @media screen and (max-width: 1365px) {
    padding: 20px 0;
  }
  .logo {
    width: 130px;
    @media screen and (max-width: 1365px) {
      width: 90px;
    }
  }
  .hamburger {
    margin-left: auto;
    transform: scale(0.6);
    display: none;
    padding: 0;
    position: absolute;
    top: 30px;
    right: 20px;
    z-index: 10;
    @media screen and (max-width: ${MobileWidth}) {
      display: block;
    }
    .hamburger-inner {
      background-color: ${PrimaryColor};
      transition-duration: 200ms;
      &:before,
      &:after {
        background-color: ${PrimaryColor};
        transition-duration: 200ms;
      }
    }
  }
`;
