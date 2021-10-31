import React, { useEffect, useState } from "react";
import { MaterialCubicBezier, PageWrapper, Wrapper } from "../../GlobalStyled";
import { Collapse } from "react-collapse";
import styled from "styled-components";

const currentYear = new Date().getFullYear();

const p1 = 2006;
const p2 = 2001;
const p2a = 2010;
const p3 = 2006;

const p1Text = currentYear - p1;
const p2Text = currentYear - p2;
const p2aText = currentYear - p2a;
const p3Text = currentYear - p3;

function Page() {
  const [currentActive, setCurrentActive] = useState(null);

  useEffect(() => {
    document.title = "Jin Investment - Biographies";
  }, []);

  return (
    <PageWrapper>
      <Wrapper>
        <div className="page-content">
          <div className="text">
            <h2>Biographies</h2>
            <TeamItem
              onClick={() => setCurrentActive(currentActive === 0 ? null : 0)}
            >
              <div
                className={`team-name ${currentActive === 0 ? "active" : ""}`}
              >
                Daisuke Kitagawa - Chief Investment Officer
              </div>
              <Collapse isOpened={currentActive === 0}>
                <div className="team-content">
                  <p>
                    Daisuke has over {p3Text} years of experience in the
                    Japanese market. Prior to Jin, Daisuke was the senior
                    portfolio manager at Instinct Asset Management for four and
                    half years. He co-managed the long/short Japanese equity
                    fund at Instinct from constructing the portfolio to managing
                    the overall risk. Prior to joining Instinct, he worked at
                    Arnott Capital in Sydney for over a year where he was
                    responsible for trading their Pan-Asian equity long/short
                    fund.
                  </p>
                  <p>
                    Previously to Arnott Capital he worked at KBC Alternative
                    Investment Management for over a year where he managed their
                    Pan Asian volatility book. Daisuke also worked at KBC
                    Securities Japan in their equity derivatives/convertible
                    bond sales team for 5 years where he was a top contributor
                    within their global CB team. Daisuke can speak native level
                    Japanese and English. He holds a Bachelor of Science in
                    Mechanical Engineering from Purdue University in the United
                    States.
                  </p>
                </div>
              </Collapse>
            </TeamItem>
            <TeamItem
              onClick={() => setCurrentActive(currentActive === 1 ? null : 1)}
            >
              <div
                className={`team-name ${currentActive === 1 ? "active" : ""}`}
              >
                Chris Blight - Chief Operating Officer
              </div>
              <Collapse isOpened={currentActive === 1}>
                <div className="team-content">
                  <p>
                    Chris has over {p2Text} years of experience covering both
                    Investment Banking and Hedge Fund Operations. Prior to Jin,
                    Chris worked as the COO of Instinct Capital for 4 years
                    where he re-designed and implemented its complete operations
                    infrastructure. He was also responsible for building a
                    compliance and corporate governance program designed for
                    institutional investors. From 2013 to 2014, he oversaw the
                    transition of Instinct Capital in Sydney to Instinct Asset
                    Management in Singapore.
                  </p>
                  <p>
                    Prior to Instinct, Chris managed the London Operations for
                    the U.S. based multi-billion dollar hedge fund Ramius
                    Capital for 4 years. At Ramius he supported multiple trading
                    strategies for the European and Asian businesses and
                    developed new and extensive operations and fund
                    administration infrastructure for the London office. In
                    addition, Chris has {p2aText} years of operations and middle
                    office experience working at Merrill Lynch, Barclays Capital
                    and UBS supporting various strategies and products. Chris
                    holds a Diploma in Business and Finance from South Devon
                    Technical College.
                  </p>
                </div>
              </Collapse>
            </TeamItem>
            <TeamItem
              onClick={() => setCurrentActive(currentActive === 2 ? null : 2)}
            >
              <div
                className={`team-name ${currentActive === 2 ? "active" : ""}`}
              >
                Rafael Nemet-Nejat - Senior Portfolio Manager
              </div>
              <Collapse isOpened={currentActive === 2}>
                <div className="team-content">
                  <p>
                    Rafael has over {p1Text} years of experience in the Japanese
                    market. Prior to Jin Rafael worked for 3 years as a
                    Portfolio Manager at Instinct Asset Management focusing on
                    the Japanese Long/Short Equity Strategy. He focused on
                    liquidity and catalyst driven strategies co-managing the
                    portfolio with Daisuke Kitagawa. Before joining Instinct, he
                    worked at First New York Securities for nearly 3 years as a
                    book runner focusing on Global ADR Arbitrage between U.S.,
                    Japanese, European, Asian and Australian Markets.
                  </p>

                  <p>
                    Prior to First New York Rafael worked at DKR Oasis Hong Kong
                    for 4 years, in his last 2 years running the Japanese
                    execution team and his own Long Short Japanese book that
                    focused on liquidity driven situations. Before Oasis Rafael
                    worked for one year in research sales at Lehman Brothers in
                    Tokyo covering Domestic and Foreign Institutions. Rafael is
                    fluent in both written and spoken English, Japanese, Spanish
                    and Portuguese. He holds a B.A. from Georgetown University
                    in History and Japanese language and a Certificate of Asian
                    Studies from the School of Foreign Service.
                  </p>
                </div>
              </Collapse>
            </TeamItem>
          </div>
          <div className="image">
            <img
              src={require("../../images/management.png").default}
              alt="image"
            />
          </div>
        </div>
      </Wrapper>
    </PageWrapper>
  );
}

const TeamItem = styled.div`
  font-family: "Open Sans", sans-serif;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
  .team-name {
    cursor: pointer;
    height: 48px;
    display: flex;
    align-items: center;
    padding-left: 20px;
    background-color: rgba(136, 136, 136, 0.08);
    border-radius: 4px;
    font-size: 14px;
    position: relative;
    &:before {
      content: "";
      border-top: 2px solid #ccc;
      border-right: 2px solid #ccc;
      width: 8px;
      height: 8px;
      position: absolute;
      right: 14px;
      top: 50%;
      transition: all 200ms ${MaterialCubicBezier};
      transform: translateY(calc(-50% + 4px)) rotate(-45deg);
    }
    &.active {
      &:before {
        transform: translateY(calc(-50% - 2px)) rotate(135deg);
      }
    }
  }
  .team-content {
    padding: 20px;
    font-size: 14px;
    p {
      margin-top: 0;
    }
  }
`;

export default Page;
