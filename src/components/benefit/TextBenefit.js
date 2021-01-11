import React from "react"
import styled from "styled-components"
import ReactReadMoreReadLess from "react-read-more-read-less";

const TextBenefit = () => {
  return (
    <BenefitsContainer>
      <Wrapper>
        <BenefitBox>
          <Heading>Create New Strategies</Heading>
          <Description>
            <p>
              Our value proposition is to enable the manager code its own
              strategies, test them with a process based on traditional
              management (backtest, paper trading, risk limits, etc.) and
              improve them thanks to the methods implemented on the platform.
            </p>
          </Description>
        </BenefitBox>
        <BenefitBox>
          <Heading>Create New Strategies</Heading>
          <Description>
            <p>
              Our value proposition is to enable the manager code its own
              strategies, test them with a process based on traditional
              management (backtest, paper trading, risk limits, etc.) and
              improve them thanks to the methods implemented on the platform.
            </p>
          </Description>
        </BenefitBox>
        <BenefitBox>
          <Heading>Improve Trading Platform</Heading>
          <Description>
            <p>
            <ReactReadMoreReadLess
                charLimit={200}
                readMoreText={"Read more ▼"}
                readLessText={"Read less ▲"}
            >
            Starting with the manager's strategy, we make prediction on the quality of trading signals in order to detect bad trades. The objective is to supplement the information used for the initial strategy and to improve the management decision. We use supervised learning with more than 100 variables derived from price and alternative data (macro data such as non-farm pay-roll, volatility and market volume, sentiment index, FED meetings, etc.). The manager can decide which features to use for the supervised learning overlay. The algorithm analyses the impact of these features to retain only the most explanatory variables.
            ML algorithm learns over a train period and validate the robustness of the model over a test period (out of sample). The manager can see the improvement of the strategy and test the robustness of the ML algorithm.
            </ReactReadMoreReadLess>
            </p>
          </Description>
        </BenefitBox>
        <BenefitBox>
          <Heading>Find the Best Portfolio Allocation</Heading>
          <Description>
            <p>
            Thanks to our expertise in reinforcement learning applied to financial markets, we leverage the added value of our data to find the best allocation between different portfolios or strategies. The advantage of our solution compared to a conventional optimization is that the allocation varies according to market conditions and adapts in real time automatically.
            </p>
          </Description>
        </BenefitBox>
        <BenefitBox>
          <Heading>Anticipate Crisis</Heading>
          <Description>
            <p>
            Our reinforcement learning method is particularly useful in challenging market conditions as it helps to anticipate market crisis and re-allocating to less risky assets depending on the market environment.
            </p>
          </Description>
        </BenefitBox>
        <BenefitBox>
          <Heading>Risk Management</Heading>
          <Description>
            <p>
            Risk management is fully integrated in the process, at the strategy and the portfolio level. We integrate reinforcement learning techniques to dynamically control risks.
            </p>
          </Description>
        </BenefitBox>
      </Wrapper>
    </BenefitsContainer>
  )
}

export default TextBenefit

const BenefitsContainer = styled.div`
  wdith: 100%;
  background: #fff;
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4rem calc((100vw - 1300px) / 2);
`

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 4rem;
  align-items: center;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`

const BenefitBox = styled.div`
  height: 100%;
  width: 100%;
  padding: 2rem 0.5rem;
  transition: 2rem;
`

const Heading = styled.h1`
  text-align: start;
  font-size: clamp(1.5rem, 5vw, 2rem);
  margin-bottom: 3rem;
`

const Description = styled.div`
  h3 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-style: italic;
  }

  p {
    font-size: 1.5rem;
    color: #3b3b3b;
    line-height: 2rem;
    padding-right: 1rem;
  }

  ul {
    padding: 0 1.5rem;

    @media screen and (max-width: 768px) {
      display: none;
    }
  }

  li {
    font-size: 1.5rem;
    color: #3b3b3b;
    line-height: 2rem;
  }
`
