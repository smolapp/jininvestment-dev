import React, {useEffect} from "react";
import { PageWrapper, Wrapper } from "../../GlobalStyled";

function Page() {
  useEffect(() => {
    document.title = "Jin Investment - Mission Statement";
  }, []);

  return (
    <PageWrapper>
      <Wrapper>
        <div className="page-content">
          <div className="text">
            <h2>Mission Statement</h2>
            <p>
              Jin aims to deliver consistent stable returns, low volatility and
              capital preservation. Our motivation is governed by our passion
              for the markets and our desire to become a top tier investment
              manager.
            </p>
            <p>
              Our goal is to build an organization that has open discussions and
              is energetic and creative. We desire for Jin to be a place that is
              easily approachable by our investors and service partners. We seek
              to build enduring relationships with our counterparties and
              investors.
            </p>
          </div>
          <div className="image">
            <img src={require("../../images/mission.png").default} alt="image" />
          </div>
        </div>
      </Wrapper>
    </PageWrapper>
  );
}

export default Page;
