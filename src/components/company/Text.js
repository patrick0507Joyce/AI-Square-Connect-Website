import React from "react"
import styled from "styled-components"
import ContextImg1 from "../../assets/images/companyContext/context-1.png"
import ContextImg2 from "../../assets/images/companyContext/context-2.png"
import ContextImg3 from "../../assets/images/companyContext/context-3.png"
import ReactReadMoreReadLess from "react-read-more-read-less";


const Text = () => {
  return (
    <TextContainer>
        <TestimonialsContainer>
      <TopLine>Contents</TopLine>
      <Description>Our Context</Description>
      <ContentWrapper>
        <ColumnOne>
          <Testimonial>
            <p>
            <ReactReadMoreReadLess
                charLimit={150}
                readMoreText={"Read more ▼"}
                readLessText={"Read less ▲"}
            >
            We are all overwhelmed by data coming from many different sources. It is the same for asset managers who face more and more information to integrate into their management decisions, whether price data, macroeconomic data,  market feelings, the increasingly numerous news… 
            It is impossible as a human to handle these millions of signals at the same time. The asset manager is left with too many parameters to digest in order to make the right decisions in real time based on his own strategies. 
            On the other side, new technologies are becoming more and more efficient. Artificial intelligence methods and machine learning tools make it possible to efficiently manage these data and understand their impact on investment strategies in order to make the best decisions.
            </ReactReadMoreReadLess>

            </p>
          </Testimonial>
        </ColumnOne>
        <ColumnTwo>
            <Images src={ContextImg1} alt={"context"} 
            css={`
            width: 600px;
            @media screen and (max-width: 768px) {
                margin: 2rem 0;
                width: 100%;
            };
            `}

            />
        </ColumnTwo>
      </ContentWrapper>
    </TestimonialsContainer>
    <TestimonialsContainer>
      <TopLine>Visions</TopLine>
      <Description>Our Vision</Description>
      <ContentWrapper>
      <ColumnOne>
            <Images src={ContextImg2} alt={"context"} />
        </ColumnOne>
        <ColumnTwo>
            <Testimonial>
            <p>
            <ReactReadMoreReadLess
                charLimit={150}
                readMoreText={"Read more ▼"}
                readLessText={"Read less ▲"}
            >
                We started from a real conviction: new technologies will change the asset management world. 
                With the increasing complexity of the financial markets, our project aims to use the most advanced techniques in artificial intelligence to help asset managers. 
                Our vision is that the machine outperforms human intuition.
                We are on augmented intelligence. The machine does not replace the manager, it is a decision reinforcement tool. 
                It is not trivial, hence our 4 years of R&D with key people with a cutting edge expertise.   
            </ReactReadMoreReadLess>
            </p>   
          </Testimonial>
        </ColumnTwo>
      </ContentWrapper>
      </TestimonialsContainer>
      <TestimonialsContainer>
      <TopLine>Storys</TopLine>
      <Description>Our Story</Description>
      <ContentWrapper>
        <ColumnOne>
          <Testimonial>
            <p>
            <ReactReadMoreReadLess
                charLimit={150}
                readMoreText={"Read more ▼"}
                readLessText={"Read less ▲"}
            >
            We started building a fully front-to-back trading platform in 2015 to develop 
            systematic investment strategies on financial markets. One of the founders, Eric Benhamou, applied machine learning techniques in finance to improve the strategies and the investment process.
            </ReactReadMoreReadLess>
            </p>
          </Testimonial>
        </ColumnOne>
        <ColumnTwo>
            <Images src={ContextImg3} alt={"context"} />
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
`
const ColumnTwo = styled.div`
    margin: auto;
`

const Images = styled.img`
  border-radius: 10px;

  @media screen and (max-width: 768px) {
    margin: 2rem 0;
    width: 100%;
  }
`
