import React from "react"
import styled from "styled-components"
import AdvisorsImg1 from "../../assets/images/frontPageContext/advisors/Marc-Romano.jpg"
import AdvisorsImg2 from "../../assets/images/frontPageContext/advisors/Serge-Tabachnik.jpg"
import AdvisorsImg3 from "../../assets/images/frontPageContext/advisors/Sandrine-Ungari.jpg"

const Advisors = () => {
  return (
    <ClientContainer>
      <TopLine>Advisors</TopLine>
      <ContentWrapper>
        <GridBox>
          <Image src={AdvisorsImg1} />
          <Name>Marc Romano</Name>
          <Title>Independent advisor and board member</Title>
        </GridBox>
        <GridBox>
          <Image src={AdvisorsImg2} />
          <Name>Serge Tabachnik</Name>
          <Title>Head Of Research at Lombard Odier Investment Managers</Title>
        </GridBox>
        <GridBox>
          <Image src={AdvisorsImg3} />
          <Name>Marc Romano</Name>
          <Title>Independent advisor and board member</Title>
        </GridBox>
      </ContentWrapper>
    </ClientContainer>
  )
}

export default Advisors

const ClientContainer = styled.div`
  background-color: rgb(215, 153, 34, 0.5);
  padding: 1rem 0;
`

const TopLine = styled.p`
  color: white;
  font-size: clamp(1.5rem, 1.6vw, 2rem);
  padding-left: 2.5rem;
  margin-bottom: 1.5rem;

  @media screen and (max-width: 768px) {
    padding-left: 2rem;
  }
`

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 2rem 0 4rem 0;
  grid-gap: 2rem;
  justify-content: center;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
const GridBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Image = styled.img`
  width: 30%;
  border-radius: 100px;

  @media screen and (max-width: 768px) {
    margin: 2rem 0;
    width: 100%;
  }
`

const Name = styled.div`
  font-size: clamp(1rem, 2.5vw, 1.5rem);
  font-style: bold;
  padding: 0.2rem 0 0 1.5rem;

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 500px) {
    font-size: 1.2rem;
  }
`
const Title = styled.p`
  font-size: clamp(0.8rem, 2vw, 1.2rem);
  margin: 0.2rem 0 0 1.5rem;
  color: #696969;

  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media screen and (max-width: 500px) {
    font-size: 1rem;
  }
`
