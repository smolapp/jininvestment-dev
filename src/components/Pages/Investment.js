import React, {useEffect} from "react";
import { PageWrapper, Wrapper } from "../../GlobalStyled";

function Page() {
  useEffect(() => {
    document.title = "Jin Investment - Investment Approach";
  }, []);

  return (
    <PageWrapper>
      <Wrapper>
        <div className="page-content">
          <div className="text">
            <h2>Investment Approach</h2>
            <p>
              The investment objective of the Fund, through its investment in
              the Master Fund, is to achieve consistent and stable returns
              seeking low volatility and capital preservation through the
              implementation of a market-neutral, long/short equity strategy.
              Jin is catalyst-driven, with a focus on liquid securities,
              primarily in publicly listed companies in Japan. The Master Fund
              adopts a research-intensive, catalyst-driven approach to construct
              its investment portfolio using a bottom-up security selection
              process with short-term macro awareness.
            </p>
          </div>
          <div className="image">
            <img
              src={require("../../images/corporate.png").default}
              alt="image"
            />
          </div>
        </div>
      </Wrapper>
    </PageWrapper>
  );
}

export default Page;
