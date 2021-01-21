import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const Partners = () => {
  const data = useStaticQuery(graphql`
    query PartnersQuery {
      allPartnersDataJson {
        nodes {
          Desc
          webLink
          img {
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  function getPartners(data) {
    const partnersArray = []
    data.allPartnersDataJson.nodes.forEach((item, index) => {
      partnersArray.push(
        <ExternalLink href={item.webLink} target="_blank">
          <PartnerImg
            src={item.img.childImageSharp.fluid.src}
            alt={item.Desc}
            fluid={item.img.childImageSharp.fluid}
          />
        </ExternalLink>
      )
      partnersArray.push(<Description>{item.Desc}</Description>)
    })
    return partnersArray
  }

  return (
    <PartnersContainer>
      <Heading>Partners</Heading>
      <Wrapper>{getPartners(data)}</Wrapper>
    </PartnersContainer>
  )
}

export default Partners

const PartnersContainer = styled.div`
  width: 100%;
  background: #c5cbe3;
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
`

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  padding: 1rem 2rem;
  grid-gap: 2rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const PartnerImg = styled(Img)`
  position: relative;
  align-item: center;
  width: 20rem;
  filter: brightness(90%);
  margin: auto;

  &:hover {
    filter: brightness(100%);
  }

  @media screen and (max-width: 768px) {
  }
`

const Heading = styled.h1`
  text-align: start;
  font-size: clamp(1.5rem, 3vw, 3rem);
  margin-bottom: 3rem;
`

const Description = styled.p`
  padding: 2rem;
  font-weight: bold;
  color: #696969;

  font-size: 1.5rem;

  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media screen and (max-width: 500px) {
    font-size: 1rem;
  }
`

const ExternalLink = styled.a`
  text-decorations: none;
  color: inherit;
`
