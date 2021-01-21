import React from "react"
import styled from "styled-components"

import { GrPersonalComputer, GrDocumentPerformance } from "react-icons/gr"
import { BsClipboardData } from "react-icons/bs"
import { RiExchangeFundsLine, RiMoneyEuroBoxLine } from "react-icons/ri"

const Features = () => {
  return (
    <FeaturesContainer>
      <Wrapper>
        <FeatureBox>
          <FeatureIcon>
            <GrPersonalComputer />
          </FeatureIcon>
          <div>
            <Heading>Augmented Intelligence</Heading>
            <Description>
              <p>
                We are here to help asset managers and leverage their decision
                process with A.I. and advanced learning.
              </p>
            </Description>
          </div>
        </FeatureBox>
        <FeatureBox>
          <FeatureIcon>
            <BsClipboardData />
          </FeatureIcon>
          <div>
            <Heading>Leverage Data</Heading>
            <Description>
              <p>
                We analyze more than hundred features and test their
                predictability on the specific strategies.
              </p>
            </Description>
          </div>
        </FeatureBox>
        <FeatureBox>
          <FeatureIcon>
            <RiExchangeFundsLine />
          </FeatureIcon>
          <div>
            <Heading>Anticipate Changing Regimes</Heading>
            <Description>
              <p>
                The model learns how to detect changing environments based on
                selected features
              </p>
            </Description>
          </div>
        </FeatureBox>
        <FeatureBox>
          <FeatureIcon>
            <RiMoneyEuroBoxLine />
          </FeatureIcon>
          <div>
            <Heading>Adapt Investment Decision to Market Environment </Heading>
            <Description>
              <p>
                The Deep Reinforcement learning model finds the best allocation
                based on the prediction
              </p>
            </Description>
          </div>
        </FeatureBox>
        <FeatureBox>
          <FeatureIcon>
            <GrDocumentPerformance />
          </FeatureIcon>
          <div>
            <Heading>Explain Results</Heading>
            <Description>
              <p>
                We developed a methodology to extract the features that impacted
                the allocation result at each point of time.
              </p>
            </Description>
          </div>
        </FeatureBox>
      </Wrapper>
    </FeaturesContainer>
  )
}

export default Features

const FeaturesContainer = styled.div`
  width: 100%;
  background-color: rgb(134, 194, 50, 0.8);
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 0;
`

const FeatureIcon = styled.div`
  font-size: 5rem;
  margin: 2.5rem;
  padding: 2.1rem 2.5rem;
  justify-content: center;
  text-align: center;
  background: lightblue;
  border-radius: 50%;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
    margin: 1rem;
    padding: 0.5 1rem;
    position: absolute;
    left: 0;
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

const FeatureBox = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const Heading = styled.h1`
  text-align: start;
  font-size: clamp(1.2rem, 5vw, 2rem);
  margin-bottom: 3rem;
  padding: 1rem 0;

  @media screen and (max-width: 768px) {
      padding-left: 9rem;
      text-align: center;
    }
  

`

const Description = styled.div`
  h3 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-style: italic;
    padding: 0 1rem;

    @media screen and (max-width: 768px) {
      display: none;
    }
  }

  p {
    font-size: 1.5rem;
    color: #3b3b3b;
    line-height: 2rem;
    padding: 0 1rem;

    @media screen and (max-width: 768px) {
      display: none;
    }
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
