import React from "react"
import styled from "styled-components"
import ContextImg1 from "../../assets/images/contactContext/context-1.png"

const TextContact = () => {
  return (
    <div>
      <ContactContainer>
      <TopLine>Contact Us</TopLine>
      <Wrapper>
        <ContactBox>
          <Heading>Email</Heading>
          <Description>
            <p>
              contact@aisquareconnect.com
            </p>
          </Description>
        </ContactBox>
        <ContactBox>
          <Heading>Address</Heading>
          <Description>
            <p>
              35 Boulevard d'Inkermann 92200 Neuilly sur Seine<br />
              Métro : Ligne 1, Sablons
              Parking public : 31 Boulevard d'Inkermann, 92200 Neuilly sur Seine
            </p>
          </Description>
        </ContactBox>
      </Wrapper>
      <Images src={ContextImg1} />
    </ContactContainer>
    </div>
  )
}

export default TextContact

const ContactContainer = styled.div`
  wdith: 100%;
  background: #fff;
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4rem calc((100vw - 1300px) / 2);
  margin: 0 2rem;
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

const ContactBox = styled.div`
  height: 100%;
  width: 100%;
  padding: 2rem 0.5rem;
  transition: 2rem;
`

const TopLine = styled.p`
  color: #077bf1;
  font-size: 2rem;
  margin-bottom: 4rem;
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

const Images = styled.img`
  border-radius: 5px;
  width: 1000px;
  margin: auto;

  @media screen and (max-width: 768px) {
    margin: 2rem 0;
    width: 100%;
  }   
`
