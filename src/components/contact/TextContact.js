import React from "react"
import styled from "styled-components"
import ContextImg1 from "../../assets/images/contactContext/context-1.png"

const TextContact = () => {
  return (
    <div>
      <ContactContainer id="contact-content">
        <TopLine>Contact Us</TopLine>
        <Wrapper>
          <ContactBox>
            <Heading>Email</Heading>
            <Description>
              <p>contact@aisquareconnect.com</p>
            </Description>
          </ContactBox>
          <ContactBox>
            <Heading>Address</Heading>
            <Description>
              <p>
                35 Boulevard d'Inkermann 92200 Neuilly sur Seine
                <br />
                Métro : Ligne 1, Sablons Parking public : 31 Boulevard
                d'Inkermann, 92200 Neuilly sur Seine
              </p>
            </Description>
          </ContactBox>
        </Wrapper>
      </ContactContainer>
      <ExternalLinkContainer>
        <ExternalLink
            href={
              "https://www.google.fr/maps/search/35+boulevard+Inkermann+92200+NeuillySurSeine?hl=fr>"
            }
            target="_blank"
          >
            <Images src={ContextImg1} />
          </ExternalLink>
      </ExternalLinkContainer>
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
  margin: 4rem 0;

  @media screen and (max-width: 768px) {
    margin: 2rem 0;
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

const ContactBox = styled.div`
  height: 100%;
  width: 100%;
  padding: 2rem 0;
  transition: 2rem;
`

const TopLine = styled.p`
  color: #077bf1;
  font-size: 2rem;
  margin-bottom: 4rem;
  padding: 0 1rem;
`

const Heading = styled.h1`
  text-align: start;
  font-size: clamp(1.5rem, 5vw, 2rem);
  margin-bottom: 3rem;
  padding: 0 1rem;
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

const Images = styled.img`
  border-radius: 5px;
  width: 120vh;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`

const ExternalLink = styled.a`
  
  text-decorations: none;
  text-align:center
  color: inherit;
`
const ExternalLinkContainer = styled.div `
  width:100%;
  text-align:center;
`