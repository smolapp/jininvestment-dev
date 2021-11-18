import React, { useEffect } from "react";
import { PageWrapper, Wrapper } from "../../GlobalStyled";

function Page() {
  useEffect(() => {
    document.title = "Jin Investment - Corporate Structure";
  }, []);

  return (
    <PageWrapper>
      <Wrapper>
        <div className="page-content">
          <div className="text">
            <h2>Corporate Structure</h2>
            <p>
              Jin Investment Management Pte Ltd is a fund manager located in
              Singapore with the authority to operate as a registered fund
              management company by the Monetary Authority of Singapore. Jin
              Investment Management is run and operated by the three founding
              partners Daisuke Kitagawa, Rafael Nemet-Nejat and Chris Blight.
              Collectively they have over 40 years of market experience and have
              worked together previously as well.
            </p>
            <p>
              Jin Japan Fund, is a Cayman Islands exempted company incorporated
              with limited liability. The Fund invests substantially all its
              capital through a “master-feeder” structure in Jin Japan Master
              Fund, also a Cayman Islands exempted company incorporated with
              limited liability. The Fund and the Master Fund are regulated
              mutual funds under the Cayman Islands Mutual Funds Law.
            </p>
          </div>
          <div className="image">
            <img
              src={require("../../images/corporate_new.jpg").default}
              alt="image"
            />
          </div>
        </div>
      </Wrapper>
    </PageWrapper>
  );
}

export default Page;
