import React from "react";
import styled, { keyframes } from "styled-components";
import {
  fadeInUp,
  MaterialCubicBezier, MobileWidth,
  PrimaryColor,
  Wrapper,
} from "../../GlobalStyled";

function Prefetch() {
  const agree = () => {
    localStorage.setItem("agree", "true");
    window.location.reload();
  };

  const disagree = () => {
    window.location.href = "https://www.google.com";
  };

  return (
    <PrefetchWrapper>
      <Wrapper>
        <header>
          <img src={require("../../images/logo.png").default} alt="logo" />
        </header>
        <p>
          This site is only for use by accredited, professional, sophisticated
          and/or qualified investors only (as defined in the relevant
          jurisdiction, including Institutional Investors, Accredited Investors
          and Expert Investors defined under the Securities and Futures Act,
          Chapter 289 of Singapore).
        </p>
        <p>
          The Investment Manager received authorisation on 13th November 2014
          from the MAS Singapore to commence business as a Registered Fund
          Management Company.
        </p>
        <p>
          The distribution of the information contained herein in certain
          jurisdictions may be restricted, and accordingly, it is the
          responsibility of and authorised recipient to satisfy itself as to
          compliance with the relevant laws and regulations. Any historical
          track record or performance-related data contained in this site is
          strictly for discussion purposes only and is not an indication of
          future performance. Any such information does not constitute any
          assurances or warranty for futures performance. This site is not
          intended to be, nor should it be construed or used as an offer to
          sell, or a solicitation of any offer to buy, interests or shares in
          any product or service. No offer or solicitation may be made prior to
          the delivery of a definitive offering document which will contain
          additional information about a product or service, including
          disclosures relating to risk factors and conflicts of interest. The
          information contained herein does not take into account the particular
          investment objectives or financial circumstances of any specific
          person who may receive it and is qualified in its entirety by the
          offering document. In the event of any discrepancies between the
          information contained herein and the offering document, the offering
          document will control.
        </p>
        <p>
          The information herein is not intended to provide, and should not be
          relied upon for, accounting, legal or tax advice or investment
          recommendations. You should make an independent investigation of the
          investment described herein, including consulting your tax, legal,
          accounting or other advisors about material discussed herein. The
          investment manager shall not be liable for any losses arising out of
          the use of this document.
        </p>
        <p>
          Information provided herein may not be suitable for the authorised
          recipient. Any decision after reading the information provided herein
          is only suitable for certain financially authorised recipient who meet
          certain eligibility requirements. Investing in financial markets
          involves a substantial degree of risk. There can be no assurance that
          any targeted return or any investment objective will be achieved.
          Investment losses, in whole or in part, may occur. No guarantee or
          representation is made in this site.
        </p>
        <div className="button-wrapper">
          <button onClick={agree}>Agree</button>
          <button onClick={disagree}>Disagree</button>
        </div>
      </Wrapper>
    </PrefetchWrapper>
  );
}

const PrefetchWrapper = styled.div`
  font-family: "Open Sans", sans-serif;
  animation: ${fadeInUp} 0.5s ${MaterialCubicBezier} forwards;
  padding-bottom: 40px;
  ${Wrapper} {
    width: 1200px;
    @media screen and (max-width: ${MobileWidth}) {
      width: 100%;
    }
  }
  header {
    padding: 20px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 140px;
      @media screen and (max-width: ${MobileWidth}) {
        width: 100px;
      }
    }
  }
  p {
    font-size: 14px;
    line-height: 24px;
    text-align: justify;
    margin-bottom: 40px;
    color: #666;
  }

  .button-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    button {
      cursor: pointer;
      font-size: 16px;
      padding: 0;
      background-color: transparent;
      outline: none;
      border: 0;
      color: ${PrimaryColor};
      font-family: Mate, serif;
      margin: 0 20px;
      position: relative;
      &:before {
        content: "";
        position: absolute;
        bottom: -6px;
        height: 4px;
        background-color: ${PrimaryColor};
        width: 60%;
        left: 0;
        right: 0;
        margin: 0 auto;
        transform: scaleX(0);
        transition: transform 200ms ${MaterialCubicBezier};
      }
      &:hover {
        &:before {
          transform: scaleX(1);
        }
      }
    }
  }
`;

export default Prefetch;
