import React from "react"
import styled from "styled-components"
import ContextImg4 from "../../assets/images/technologyContext/context-4.png"
import ContextImg5 from "../../assets/images/technologyContext/context-5.png"
import ContextImg6 from "../../assets/images/technologyContext/context-6.png"
import ContextImg7 from "../../assets/images/technologyContext/context-7.png"
import ReactReadMoreReadLess from "react-read-more-read-less"

const Text = () => {
  return (
    <TextContainer>
      <TestimonialsContainer id="technology-technology">
        <TopLine>Technology</TopLine>
        <Description>Novel Technology</Description>
        <VerticalTestimonial>
          <p>
            We developed the same technology as the one used by Tesla to create
            the autonomous car or Google Deep Mind to beat the best Go Game
            player.
          </p>
          <img src={ContextImg6} alt={"solution"} />
          <p>
            We first analyze the given strategies and feed the model with
            contextual information on the environment, such as market data,
            economic features, and specific datasets. We use this information to
            make prediction on the strategies, and then find the best real time
            allocation depending on the prediction made.
          </p>
        </VerticalTestimonial>
      </TestimonialsContainer>
      <TestimonialsContainer id="technology-optimisation">
        <TopLine>Methods</TopLine>
        <Description>Supervised Learning</Description>
        <ContentWrapper>
          <ColumnOne>
            <Images src={ContextImg4} alt={"context"} />
          </ColumnOne>
          <ColumnTwo>
            <Testimonial>
              <p>
                <ReactReadMoreReadLess
                  charLimit={200}
                  readMoreText={"Read more ▼"}
                  readLessText={"Read less ▲"}
                >
                  We use supervised learning with more than 100 variables
                  derived from price and alternative data (macro data such as
                  non-farm pay-roll, volatility and market volume, sentiment
                  index, FED meetings, etc.). The algorithm analyses the impact
                  of these data to retain only the most explanatory variables.
                  We apply gradient boosting methods in random forest algorithms
                  to give a probability on the prediction.
                </ReactReadMoreReadLess>
              </p>
            </Testimonial>
          </ColumnTwo>
        </ContentWrapper>
      </TestimonialsContainer>
      <TestimonialsContainer id="technology-reinforcement">
        <TopLine>Methods</TopLine>
        <Description>Deep Reinforcement Learning</Description>
        <ContentWrapper>
          <ColumnOne>
            <Testimonial>
              <p>
                <ReactReadMoreReadLess
                  charLimit={200}
                  readMoreText={"Read more ▼"}
                  readLessText={"Read less ▲"}
                >
                  Reinforcement learning methods have been used by Google
                  DeepMind, the first computer program to defeat a world
                  champion at the ancient Chinese game of Go. Unlike supervised
                  learning where the machine is given right and wrong answers,
                  reinforcement learning finds the right action to optimize its
                  "reward" according to the state of the market. The optimal
                  action is usually a complex function. Neural networks are a
                  way to represent this type of function and to solve this type
                  of complex problem.
                </ReactReadMoreReadLess>
              </p>
            </Testimonial>
          </ColumnOne>
          <ColumnTwo>
            <Images src={ContextImg5} alt={"context"} />
          </ColumnTwo>
        </ContentWrapper>
      </TestimonialsContainer>
      <TestimonialsContainer id="technology-feature">
        <TopLine>Methods</TopLine>
        <Description>Deep Reinforcement Learning</Description>
        <ContentWrapper>
          <ColumnOne>
          <Images src={ContextImg7} alt={"feature"} />
          </ColumnOne>
          <ColumnTwo>
          <Testimonial>
              <p>
                  We developed a methodology based on <b>Neurons excitation</b> to rank
                  the features by importance. At each point of time, we know
                  which features have the most impact on the allocation.
              </p>
            </Testimonial>
            
          </ColumnTwo>
        </ContentWrapper>
      </TestimonialsContainer>
    </TextContainer>
  )
}

export default Text

const TextContainer = styled.div``

const TestimonialsContainer = styled.div`
  width: 100%;
  background: #fcfcfc;
  color: #000;
  padding: 2rem 0;
  height: 100%;
`
const TopLine = styled.p`
  color: #077bf1;
  font-size: clamp(1.5rem, 3vw, 2rem);
  padding-left: 2rem;
  margin-bottom: 0.75rem;
`

const Description = styled.div`
  text-align: start;
  padding-left: 2rem;
  margin-bottom: 0.75rem;
  font-size: clamp(1.2rem, 2.5vw, 1.8rem);
  font-weight: bold;
`
const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 2rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
const ColumnOne = styled.div`
  margin: auto;
`
const Testimonial = styled.div`
  padding-right: 0.5rem;

  h3 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-style: italic;
  }

  p {
    font-size: clamp(1rem, 1.8vw, 1.5rem);
    color: #696969;
    line-height: 1.3;
    padding-left: 1rem;
  }

  ul {
    padding: 1.5rem 0 1rem 2rem;
  }

  li {
    font-size: clamp(1rem, 1.8vw, 1.5rem);
    color: #696969;
    line-height: 1;
  }
`
const ColumnTwo = styled.div`
  margin: auto;
`

const Images = styled.img`
  border-radius: 10px;
  width: 500px;
  @media screen and (max-width: 768px) {
    margin: 2rem 0;
    width: 100%;
  }
`

const VerticalTestimonial = styled.div`
  text-align: center;
  p {
    font-size: clamp(1rem, 1.8vw, 1.5rem);
    color: #696969;
    line-height: 1.3;
    padding: 5rem 7rem;

    @media screen and (max-width: 768px) {
      padding: 1rem 3rem;
    }
  }

  img {
    width: 80%;
    @media screen and (max-width: 768px) {
      padding: 2rem 2rem;
    }
  }
`
