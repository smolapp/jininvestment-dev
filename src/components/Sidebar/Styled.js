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
  padding: 40px 0;
  > a {
    text-decoration: none;
    font-family: Mate, serif;
    color: ${PrimaryColor};
    font-size: 24px;
    position: relative;
    &:before {
      content: "";
      position: absolute;
      left: -20px;
      height: 100%;
      background: ${PrimaryColor};
      width: 4px;
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
    &:last-child {
      margin-top: auto;
    }
  }
`;
