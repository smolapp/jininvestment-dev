import styled from "styled-components";

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
  .logo {
    width: 130px;
  }
`;
