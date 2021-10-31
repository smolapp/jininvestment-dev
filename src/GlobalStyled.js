import styled, { createGlobalStyle, keyframes } from "styled-components";

export const PrimaryColor = "#252362";

export const MaterialCubicBezier = "cubic-bezier(0.4, 0.0, 0.2, 1)";

export const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const GlobalStyled = createGlobalStyle`
  *{ 
    box-sizing: border-box;
  }
  body {
    margin: 0;
  }
  
  .App {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    padding: 40px 0 80px;
    animation: ${fadeInUp} 0.5s ${MaterialCubicBezier} forwards;
  }

  .ReactCollapse--collapse {
    transition: height 400ms ${MaterialCubicBezier};
  }
`;

export const Wrapper = styled.div`
  width: 1120px;
  margin: 0 auto;
  position: relative;
`;

export const PageWrapper = styled.main`
  margin-top: auto;
  animation: ${fadeInUp} 400ms ${MaterialCubicBezier} forwards;
  h2 {
    font-size: 36px;
    font-family: Mate, serif;
    color: ${PrimaryColor};
  }
  p {
    font-size: 14px;
    line-height: 26px;
    font-weight: 300;
    font-family: "Open Sans", sans-serif;
    color: rgb(136, 136, 136);
    text-align: justify;
  }
  .page-content {
    width: calc(100% - 200px);
    display: flex;
    align-items: flex-end;
    .text {
      width: 60%;
    }
    .image {
      width: 400px;
      filter: grayscale(1);
      opacity: 0.2;
      img {
        width: 100%;
      }
    }
  }
`;

export default GlobalStyled;
