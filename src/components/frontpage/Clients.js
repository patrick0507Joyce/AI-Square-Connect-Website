import React from "react"
import styled from "styled-components"
import ClientsImg1 from "../../assets/images/frontPageContext/clients/client-1.jpg"
import ClientsImg2 from "../../assets/images/frontPageContext/clients/client-2.jpg"
import ClientsImg3 from "../../assets/images/frontPageContext/clients/client-3.jpg"
import ClientsImg4 from "../../assets/images/frontPageContext/clients/client-4.jpg"

const Clients = () => {
  return (
    <ClientContainer>
      <TopLine>Clients && Partners</TopLine>
      <ContentWrapper>
        <GridBox>
          <Image src={ClientsImg1} />
        </GridBox>
        <GridBox>
          <Image src={ClientsImg2} />
        </GridBox>
        <GridBox>
          <Image src={ClientsImg3} />
        </GridBox>
        <GridBox>
          <Image src={ClientsImg4} />
        </GridBox>
      </ContentWrapper>
    </ClientContainer>
  )
}

export default Clients

const ClientContainer = styled.div`
  background-color: rgba(101, 157, 189, 0.8);
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
  grid-template-columns: 1fr 1fr;
  padding: 2rem 0 4rem 0;
  grid-gap: 2rem;
  justify-content: center;  

  
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
const GridBox = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
`

const Image = styled.img`
  width: 30%;
  margin: auto;

  @media screen and (max-width: 768px) {
    width: 80%;
  }
`