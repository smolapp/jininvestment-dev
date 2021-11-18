import React, { useEffect } from "react";
import { PageWrapper, Wrapper } from "../../GlobalStyled";

function Page() {
  useEffect(() => {
    document.title = "Jin Investment - Welcome to Jin Investment";
  }, []);
  return (
    <PageWrapper>
      <Wrapper>
        <div className="page-content">
          <div className="text">
            <h2>What is Jin?</h2>
            <p>
              The name Jin is derived from the word 陣形 pronounced “Jin-Kei.”
              Jin-Kei refers to the various types of formations or strategies
              the Samurai used before engaging in battle during the Sengoku Era.
              The Shogun of each fiefdom needed to choose the correct Jin-Kei
              depending on the landscape in order to win the battle.
            </p>
            <p>
              We selected the word Jin, because we believe market conditions are
              always changing. Hence, we must continually adapt our Jin-Kei in
              order to outperform the market. The word Jin also has many
              positive meanings in Japanese. For example, 仁、人、心、任 and 尽
              which are all pronounced Jin, mean virtue, people, heart/spirt,
              responsibility and endeavour respectively.
            </p>
          </div>
          <div className="image">
            <img src={require("../../images/home_new.jpg").default} alt="image" />
          </div>
        </div>
      </Wrapper>
    </PageWrapper>
  );
}

export default Page;
