import styled from "styled-components";
import { MaterialCubicBezier, PrimaryColor, Wrapper } from "../../GlobalStyled";

export const SidebarWrapper = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  left: 0;
  bottom: 0;
  height: 100vh;
  overflow: auto;
  z-index: 10;
  pointer-events: none;
  ${Wrapper} {
    display: flex;
    height: 100%;
  }
`;

export const SidebarContainer = styled.nav`
  display: flex;
  flex-direction: column;
  width: 200px;
  margin-left: auto;
  padding: 40px 0 80px;
  pointer-events: auto;
  > a {
    text-decoration: none;
    font-family: Mate, serif;
    color: #3a3a3a;
    font-size: 18px;
    position: relative;
    &:before {
      content: "";
      position: absolute;
      left: -20px;
      height: 100%;
      background: ${PrimaryColor};
      width: 2px;
      transition: all 200ms ${MaterialCubicBezier};
      transform: scaleY(0);
      transform-origin: top;
      opacity: 0;
    }
    &.active,
    &:hover {
      &:before {
        transform: scaleY(1);
        opacity: 1;
      }
    }
    &:not(:last-child) {
      margin-bottom: 20px;
    }
    //&:last-child {
    //  margin-top: auto;
    //}
  }
`;
