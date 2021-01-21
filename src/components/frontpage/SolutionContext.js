import React from "react"
import styled from "styled-components"
import ContextImg2 from "../../assets/images/companyContext/context-2.png"
import ContextImg4 from "../../assets/images/companyContext/context-4.png"


const SolutionContext = () => {
  return (
    <TextContainer>
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
      <SolutionContainer id="company-solution">
        <TopLine css={`color: white;`}>Our Solution</TopLine>
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

export default SolutionContext

const TextContainer = styled.div`
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
  margin-bottom: 1.5rem;

  @media screen and (max-width: 768px) {
    padding-left: 2rem;
  }
`

const SolutionContainer = styled.div`
  background-color: rgba(149, 7, 64, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem 0;
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
  color: white;
  p {
    font-size: clamp(1rem, 1.8vw, 1.5rem);
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
