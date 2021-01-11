import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinksWrapper>
        <FooterDesc>
          <h1>AI Square Connect</h1>
          <p>We strive to create the best experiences for our customers</p>
          <CopyrightContainer>
            <p>Copyright: AI Square Connect, Paris. @2021</p>
          </CopyrightContainer>
        </FooterDesc>
        <FooterLinkItems>
          <FooterLinkTitle>Company</FooterLinkTitle>
          <FooterLinkTitle to="/">Context</FooterLinkTitle>
          <FooterLinkTitle to="/">Our Vision</FooterLinkTitle>
          <FooterLinkTitle to="/">Our Story</FooterLinkTitle>
          <FooterLinkTitle to="/">Founders</FooterLinkTitle>
          <FooterLinkTitle to="/">Partners</FooterLinkTitle>
        </FooterLinkItems>
      </FooterLinksWrapper>
      <FooterLinksWrapper>
        <FooterLinkItems>
          <FooterLinkTitle>Technology</FooterLinkTitle>
          <FooterLink to="/">Systematic trading platform</FooterLink>
          <FooterLink to="/">Supervised learning</FooterLink>
          <FooterLink to="/">Supervised learning</FooterLink>
          <FooterLink to="/">Reinforcement learning</FooterLink>
        </FooterLinkItems>
        <FooterLinkItems>
          <FooterLinkTitle>Social Media</FooterLinkTitle>
          <FooterLink to="/">Instgram</FooterLink>
          <FooterLink to="/">Github</FooterLink>
          <FooterLink to="/">Facebook</FooterLink>
          <FooterLink to="/">Twitter</FooterLink>
          <FooterLink to="/">Google+</FooterLink>
        </FooterLinkItems>
      </FooterLinksWrapper>
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.div`
  padding: 5rem calc((100vw - 1100px) / 2);
  display: grid;
  align-items: center;
  grid-template-column: repeat(2, 1fr);
  color: #000;
  background: #fafafb;
`
const FooterDesc = styled.div`
  padding: 0 2rem;

  h1 {
    margin-bottom: 3rem;
    color: #f26a2e;
  }

  @media screen and (max-width: 400px) {
    padding: 1rem;
  }
`
const FooterLinksWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media screen and (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`
const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem 5rem;

  @media screen and (max-width: 400px) {
    padding: 1rem;
  }
`
const FooterLinkTitle = styled.div`
  font-size: 14px;
  margin-bottom: 16px;
`
const FooterLink = styled(Link)`
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;
    color: #3d3d4e;

    &:hover {
        color: #f26a2e;
        transition: 0.3s ease-out;
    }
`

const CopyrightContainer = styled.div `
    p {
        color: grey;
        margin: 2rem 0;
  }
`
