import React from "react";
import styled, { keyframes } from "styled-components";
import { MaterialCubicBezier } from "../../GlobalStyled";

function Animate(props) {
  return (
    <AnimateWrapper {...props}>
      <img src={require("../../images/logo.png").default} alt="logo" />
    </AnimateWrapper>
  );
}

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0);
  }
  30%, 80% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(1.2);
  }
`;

const AnimateWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  img {
    width: 50vw;
    max-width: 180px;
    animation: ${fadeIn} 1s ${MaterialCubicBezier} forwards;
  }
`;

export default Animate;
