import styled from "styled-components";
import {
  MaterialCubicBezier,
  MobileWidth,
  PrimaryColor,
  Wrapper,
} from "../../GlobalStyled";

export const SidebarWrapper = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  left: 0;
  bottom: 0;
  height: 100vh;
  overflow: auto;
  z-index: 20;
  pointer-events: none;
  @media screen and (max-width: ${MobileWidth}) {
    pointer-events: auto;
  }
  ${Wrapper} {
    display: flex;
    height: 100%;
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

export const SidebarContainer = styled.nav`
  display: flex;
  flex-direction: column;
  width: 200px;
  margin-left: auto;
  padding: 40px 0 80px;
  pointer-events: auto;
  @media screen and (max-width: 1365px) {
    position: fixed;
    width: 100%;
    height: calc(100% - 80px);
    left: 0;
    top: 80px;
    background-color: #fff;
    z-index: 10;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transform: translateY(-20px);
    visibility: hidden;
    transition: all 200ms ${MaterialCubicBezier};
  }
  &.active {
    @media screen and (max-width: 1365px) {
      opacity: 1;
      transform: translateY(0);
      visibility: visible;
    }
  }
  > a {
    text-decoration: none;
    font: normal normal normal 14px / 18px Helvetica, Arial, Verdana, sans-serif;
    color: #3a3a3a;
    font-size: 16px;
    position: relative;
    @media screen and (max-width: 1365px) {
      font-size: 20px;
    }
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
      @media screen and (max-width: 1365px) {
        margin-bottom: 40px;
      }
    }
    //&:last-child {
    //  margin-top: auto;
    //}
  }
`;
