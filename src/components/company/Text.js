import React, { useState, useEffect } from "react"
import styled from "styled-components"
import ContextImg1 from "../../assets/images/companyContext/context-1.png"
import ContextImg2 from "../../assets/images/companyContext/context-2.png"
import ContextImg3 from "../../assets/images/companyContext/context-3.png"
import ContextImg4 from "../../assets/images/companyContext/context-4.png"
import ReactReadMoreReadLess from "react-read-more-read-less"

/* IN CASE We have to add styles in the ReactReadMoreReadLess, like bold
<ReadMoreButton
                  onClick={() => {
                    setReadMoreVision(!readMoreVision)
                  }}
                >
                  {readMoreOrLessText}
                </ReadMoreButton>
*/
const TextCompany = () => {
  const [readMoreVision, setReadMoreVision] = useState(false)
  const [readMoreOrLessText, setReadMoreOrLessText] = useState("Read more ▼")

  useEffect(() => {
    readMoreVision
      ? setReadMoreOrLessText("Read more ▼")
      : setReadMoreOrLessText("Read less ▲")
  }, [readMoreVision])

  return (
    <TextContainer>
      <TestimonialsContainer id="company-context">
        <TopLine>Our Context</TopLine>
        <ContentWrapper>
          <ColumnOne>
            <Testimonial>
              <p>
                <ReactReadMoreReadLess
                  charLimit={150}
                  readMoreText={"Read more ▼"}
                  readLessText={"Read less ▲"}
                >
                We are all overwhelmed by data coming from many different
                sources. It is the same for asset managers who face more and
                more information to integrate into their management decisions,
                whether price data, macroeconomic data, market feelings, the
                increasingly numerous news… It is impossible as a human to
                handle these millions of signals at the same time. The asset
                manager is left with too many parameters to digest in order to
                make the right decisions in real time based on his own
                strategies. On the other side, new technologies are becoming
                more and more efficient. Artificial intelligence methods and
                machine learning tools make it possible to efficiently manage
                these data and understand their impact on investment strategies
                in order to make the best decisions.
                </ReactReadMoreReadLess>
              </p>
            </Testimonial>
          </ColumnOne>
          <ColumnTwo>
            <Images
              src={ContextImg1}
              alt={"context"}
              css={`
                width: 600px;
                @media screen and (max-width: 768px) {
                  margin: 2rem 0;
                  width: 100%;
                } ;
              `}
            />
          </ColumnTwo>
        </ContentWrapper>
      </TestimonialsContainer>
      <TestimonialsContainer id="company-vision">
        <TopLine>Our Vision</TopLine>
        <ContentWrapper>
          <ColumnOne>
            <Images src={ContextImg2} alt={"context"} />
          </ColumnOne>
          <ColumnTwo>
            <Testimonial>
              <p>
                New technologies are becoming more and more efficient. With the
                increasing complexity of the financial markets, Ai For Alpha
                uses the most advanced techniques in artificial intelligence to
                help asset managers to efficiently manage market information in
                order to make the best investment decisions. Our vision is that
                the machine outperforms human intuition. We are on{" "}
                <b>Augmented Intelligence</b>.
              </p>
            </Testimonial>
          </ColumnTwo>
        </ContentWrapper>
      </TestimonialsContainer>
      <TestimonialsContainer id="company-story">
        <TopLine>Our Story</TopLine>
        <ContentWrapper>
          <ColumnOne>
            <Testimonial>
              <p>
                <ReactReadMoreReadLess
                  charLimit={150}
                  readMoreText={"Read more ▼"}
                  readLessText={"Read less ▲"}
                >
                  We started building a fully front-to-back trading platform in
                  2015 to develop systematic investment strategies on financial
                  markets. One of the founders, Eric Benhamou, applied machine
                  learning techniques in finance to improve the strategies and
                  the investment process.
                </ReactReadMoreReadLess>
              </p>
            </Testimonial>
          </ColumnOne>
          <ColumnTwo>
            <Images src={ContextImg3} alt={"context"} />
          </ColumnTwo>
        </ContentWrapper>
      </TestimonialsContainer>
      <SolutionContainer id="company-solution">
        <TopLine>Our Solution</TopLine>
                <Solution>
                  <p>
                  Ai for Alpha used the latest technics in Deep learning to provide a dynamic asset allocation that adapts in real time to changing market conditions. 
                  </p>
                  <Images src={ContextImg4} alt={"solution"} />
                </Solution>
      </SolutionContainer>
    </TextContainer>
  )
}

export default TextCompany

const TextContainer = styled.div`
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
  font-size: clamp(1.5rem, 1.6vw, 2rem);
  padding-left: 2.5rem;

  @media screen and (max-width: 768px) {
    padding-left: 2rem;
    margin-bottom: 1.5rem;
  }
`

const SolutionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 2rem 0;
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

const Solution = styled.div `
  padding: 4rem 10rem;
  text-align: center;
  p {
    font-size: clamp(1rem, 1.8vw, 1.5rem);
    color: #696969;
    line-height: 1.3;
    padding: 0 0 4rem 0;
  }

  @media screen and (max-width: 768px) {
    padding: 2rem 3rem;
  }
`
const Testimonial = styled.div`
  padding-right: 2rem;

  h3 {
    margin-bottom: 1rem;
    font-size: clamp(1rem, 2vw, 1.8rem);
    font-style: italic;
  }

  p {
    font-size: clamp(1rem, 1.8vw, 1.5rem);
    color: #696969;
    line-height: 1.3;
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

const ReadMoreButton = styled.button`
  background-color: Transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
  font-size: clamp(1rem, 1.8vw, 1.5rem);
`
