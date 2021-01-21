import React from "react"
import styled from "styled-components"
import { RiBankCard2Fill, RiMoneyEuroBoxLine } from 'react-icons/ri'
import { MdNextWeek } from 'react-icons/md'
import { SiMicrostrategy } from 'react-icons/si'
import { CgDanger } from 'react-icons/cg'

const TextBenefit = () => {
  return (
    <BenefitsContainer>
      <Wrapper>
        <BenefitBox id="benefit-allocation">
          <BenefitIcon>
            <RiBankCard2Fill />
          </BenefitIcon>
          <div>
            <Heading>Find the best portfolio allocation</Heading>
            <Description>
              <p>
                Thanks to our expertise in reinforcement learning applied to
                financial markets, we leverage the added value of our data to find
                the best allocation between different portfolios or strategies.
                The advantage of our solution compared to a conventional
                optimization is that the allocation varies according to market
                conditions and adapts in real time automatically.
              </p>
            </Description>
          </div>
        </BenefitBox>
        <BenefitBox id="benefit-crisis">
          <BenefitIcon>
            <RiMoneyEuroBoxLine />
          </BenefitIcon>
          <div>
            <Heading>Anticipate crisis</Heading>
            <Description>
              <p>
                  Our deep learning method is particularly useful in challenging
                  market conditions as it helps to anticipate market crises and
                  re-allocating to less risky assets depending on the market
                  environment.
              </p>
            </Description>
          </div>
        </BenefitBox>
        <BenefitBox id="benefit-prediction">
          <BenefitIcon>
            <MdNextWeek />
          </BenefitIcon>
          <div>
            <Heading>Improve trading prediction</Heading>
            <Description>
              <p>
                We use supervised learning with more than 100 variables derived
                from price and alternative data (macro data, sentiment index,
                etc...) to make prediction on the manager’s strategies. The
                manager can decide which features to use for the supervised
                learning overlay. The algorithm analyses the impact of these
                features to retain only the most explanatory variables. The
                objective is to supplement the information used for the initial
                strategy and to improve the management decision.
              </p>
            </Description>
          </div>
        </BenefitBox>
        <BenefitBox id="benefit-strategies">
          <BenefitIcon>
            <SiMicrostrategy />
          </BenefitIcon>
          <div>
            <Heading>Design new strategies</Heading>
            <Description>
              <p>
                We help managers to develop algorithmic strategies based on AI. We
                apply our Deep learning models to large economical datasets to
                extract patterns and derive the best investment decision.
              </p>
            </Description>
          </div>
        </BenefitBox>
        <BenefitBox id="benefit-risk">
          <BenefitIcon>
            <CgDanger />
          </BenefitIcon>
          <div>
            <Heading>Risk management</Heading>
            <Description>
              <p>
                Risk management is fully integrated into the process, at the
                strategy and the portfolio level. We integrate reinforcement
                learning techniques to dynamically control risks.
              </p>
            </Description>
          </div>
        </BenefitBox>
      </Wrapper>
    </BenefitsContainer>
  )
}

export default TextBenefit

const BenefitsContainer = styled.div`
  width: 100%;
  background-color: #fafafb;
  color: #000;
  display:flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 0;
`

const BenefitIcon = styled.div `
  font-size: 5rem;
  margin: 2.5rem;
  padding: 2.1rem 2.5rem;
  justify-content: center;
  text-align: center;
  background: lightblue;
  border-radius: 50%;

  @media screen and (max-width: 768px) {
    display: none;
  }
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
  padding: 2rem 0;
  transition: 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const Heading = styled.h1`
  text-align: start;
  font-size: clamp(1.5rem, 5vw, 2rem);
  margin-bottom: 3rem;
  padding: 0 0.5rem;
`

const Description = styled.div`
  h3 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-style: italic;
    padding: 0 1rem;
  }

  p {
    font-size: 1.5rem;
    color: #3b3b3b;
    line-height: 2rem;
    padding: 0 1rem;
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
