import React from "react"
import styled from "styled-components"
import ContextImg1 from "../../assets/images/technologyContext/context-1.png"
import ContextImg2 from "../../assets/images/technologyContext/context-2.png"
import ContextImg3 from "../../assets/images/technologyContext/context-3.png"
import ContextImg4 from "../../assets/images/technologyContext/context-4.png"
import ContextImg5 from "../../assets/images/technologyContext/context-5.png"
import ReactReadMoreReadLess from "react-read-more-read-less";


const Text = () => {
  return (
    <TextContainer>
        <TestimonialsContainer id="technology-platform">
      <TopLine>Platform</TopLine>
      <Description>Systematic Trading Platform</Description>
      <ContentWrapper>
        <ColumnOne>
          <Testimonial>
            <p>
            We have developed a fully front to back platform, that is to say that it integrates all the stages of the management process, starting from:
            </p>
            <ul>
                <li>data analysis</li>
                <li>backtesting</li>
                <li>optimization of strategies thanks to evolutionary optimization tools that avoid over-learning</li>
                <li>machine learning tools to improve strategies using other data sources</li>
                <li>and finally, the fully automatic execution of trades taking into account risk limits</li>
            </ul>
          </Testimonial>
        </ColumnOne>
        <ColumnTwo>
            <Images src={ContextImg1} alt={"context"} />
        </ColumnTwo>
      </ContentWrapper>
    </TestimonialsContainer>
    <TestimonialsContainer id="technology-description">
      <TopLine>Strategy</TopLine>
      <Description>Strategy Description</Description>
      <ContentWrapper>
      <ColumnOne>
            <Images src={ContextImg2} alt={"context"} />
        </ColumnOne>
        <ColumnTwo>
            <Testimonial>
            <p>
            <ReactReadMoreReadLess
                charLimit={200}
                readMoreText={"Read more ▼"}
                readLessText={"Read less ▲"}
            >
            We created an extension of the C# language to describe trading algorithms simply. We are able to write in almost plain English all types of algorithms to analyse, optimise and use machine learning techniques to make trading decisions.
            </ReactReadMoreReadLess>
            </p>   
          </Testimonial>
        </ColumnTwo>
      </ContentWrapper>
      </TestimonialsContainer>
      <TestimonialsContainer id="technology-supervised">
      <TopLine>Optimisation</TopLine>
      <Description>Cutting Edge Optimisation</Description>
      <ContentWrapper>
        <ColumnOne>
          <Testimonial>
            <p>
            <ReactReadMoreReadLess
                charLimit={200}
                readMoreText={"Read more ▼"}
                readLessText={"Read less ▲"}
            >
            We have developed evolutionary optimisation methods to find the best parameters of the strategy while avoiding over-fitting. 
            Our innovating technology handles problems in high dimension for non-convex and discrete optimization cases. Based on particle swarm, CMA ES and genetic algorithm, these new methods are based on work in neuroscience and metaheuristics.
            </ReactReadMoreReadLess>
            </p>
          </Testimonial>
        </ColumnOne>
        <ColumnTwo>
            <Images src={ContextImg3} alt={"context"} />
        </ColumnTwo>
      </ContentWrapper>
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
            We use supervised learning with more than 100 variables derived from price and alternative data (macro data such as non-farm pay-roll, volatility and market volume, sentiment index, FED meetings, etc.). The algorithm analyses the impact of these data to retain only the most explanatory variables.
            We apply gradient boosting methods in random forest algorithms to give a probability on the prediction.
            </ReactReadMoreReadLess>
            </p>   
          </Testimonial>
        </ColumnTwo>
      </ContentWrapper>
      </TestimonialsContainer>
      <TestimonialsContainer id="technology-reinforcement">
      <TopLine>Methods</TopLine>
      <Description>Reinforcement Learning</Description>
      <ContentWrapper>
        <ColumnOne>
          <Testimonial>
            <p>
            <ReactReadMoreReadLess
                charLimit={200}
                readMoreText={"Read more ▼"}
                readLessText={"Read less ▲"}
            >
            Reinforcement learning methods have been used by Google DeepMind, the first computer program to defeat a world champion at the ancient Chinese game of Go. Unlike supervised learning where the machine is given right and wrong answers, reinforcement learning finds the right action to optimize its "Reward" according to the state of the market.
            The optimal action is usually a complex function. Neural networks are a way to represent this type of function and to solve this type of complex problem.
            </ReactReadMoreReadLess>
            </p>
          </Testimonial>
        </ColumnOne>
        <ColumnTwo>
            <Images src={ContextImg5} alt={"context"} />
        </ColumnTwo>
      </ContentWrapper>
      </TestimonialsContainer>
    </TextContainer>
    
  )
}

export default Text

const TextContainer = styled.div `
    margin: 2rem 0;
`


const TestimonialsContainer = styled.div`
  width: 100%;
  background: #fcfcfc;
  color: #000;
  padding: 2rem 0;
  height: 100%;
`
const TopLine = styled.p`
  color: #077bf1;
  font-size: 2rem;
  padding-left: 2rem;
  margin-bottom: 0.75rem;
`

const Description = styled.div`
  text-align: start;
  padding-left: 2rem;
  margin-bottom: 2rem;
  font-size: clamp(1.5rem, 5vw, 2rem);
  font-weight: bold;
`
const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 2rem;


  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
const ColumnOne = styled.div`
    margin: auto;
`
const Testimonial = styled.div`
  padding-right: 2rem;

  h3 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-style: italic;
  }

  p {
    font-size: 1.5rem;
    color: #3b3b3b;
    line-height: 2rem;  
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





