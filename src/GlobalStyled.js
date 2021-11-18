import styled, { createGlobalStyle, keyframes } from "styled-components";

export const PrimaryColor = "#252362";
export const MobileWidth = "767px";
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
  * { 
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
  width: 90vw;
  margin: 0 auto;
  position: relative;
  @media screen and (max-width: 1366px) {
    width: 1120px;
  }
  @media screen and (max-width: 1365px) {
    width: 100%;
    padding: 0 20px;
  }
`;

export const PageWrapper = styled.main`
  margin-bottom: auto;
  animation: ${fadeInUp} 400ms ${MaterialCubicBezier} forwards;
  padding-top: 200px;
  @media screen and (max-width: 1365px) {
    padding-top: 50px;
  }
  h2 {
    font-size: 36px;
    font-family: Mate, serif;
    color: ${PrimaryColor};
    font-weight: normal;
    @media screen and (max-width: 1365px) {
      font-size: 30px;
    }
  }
  p {
    font-size: 14px;
    line-height: 26px;
    font-weight: 300;
    font-family: Mate, serif;
    color: rgb(136, 136, 136);
    text-align: justify;
    @media screen and (max-width: 1365px) {
      font-size: 12px;
    }
  }
  .page-content {
    width: calc(100% - 200px);
    display: flex;
    align-items: flex-start;
    @media screen and (max-width: 1365px) {
      width: 100%;
      flex-direction: column;
    }
    .text {
      width: 60%;
      @media screen and (max-width: 1365px) {
        width: 100%;
      }
    }
    .image {
      width: 400px;
      filter: grayscale(1);
      opacity: 0.2;
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;
      @media screen and (max-width: 1365px) {
        width: 100%;
      }
      img {
        width: 80%;
      }
    }
  }
`;

export const Field = styled.div`
  border: 2px solid #eee;
  border-radius: 4px;
  min-height: 40px;
  background-color: rgb(251, 252, 252);
  margin-bottom: 12px;
  transition: all 200ms ${MaterialCubicBezier};

  &:focus-within {
    border-color: ${PrimaryColor};
  }

  input,
  textarea {
    height: 100%;
    min-height: 40px;
    width: 100%;
    padding-left: 20px;
    border: 0;
    outline: none;
    border-radius: 4px;
    background-color: transparent;
  }

  textarea {
    max-width: 100%;
    min-width: 100%;
    min-height: 100px;
    padding-top: 10px;
    font-family: "Open Sans", sans-serif;
    font-size: 14px;
  }
`;

export const SubmitButton = styled.button`
  padding: 12px 24px;
  border-radius: 4px;
  background-color: ${PrimaryColor};
  color: #fff;
  font-family: "Open Sans", sans-serif;
  border: 0;
  outline: none;
`;

export default GlobalStyled;
