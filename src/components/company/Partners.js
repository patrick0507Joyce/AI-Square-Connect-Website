import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

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

    function getPartners (data) {
        const partnersArray = [];
        data.allPartnersDataJson.nodes.forEach((item, index) => {
            partnersArray.push (
                    <ExternalLink href={item.webLink} target="_blank">
                    <PartnerImg 
                    src={item.img.childImageSharp.fluid.src}
                    alt={item.Desc}
                    fluid={item.img.childImageSharp.fluid}
                    />
                    </ExternalLink>
            );
            partnersArray.push (
                <Description>
                    {item.Desc}
                </Description>
            );
        })
        return partnersArray
    }

    return (
        <FoundersContainer >
            <Heading>
                Partners
            </Heading>
            <Wrapper>
            {getPartners(data)}
            </Wrapper>
        </FoundersContainer>
    )
}

export default Partners


const FoundersContainer = styled.div `
    width : 100%;
    background : #fff;
    color: #000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 1rem;
    padding: 3rem 0;
`

const Wrapper = styled.div `
    display: flex;
    flex-direction: column;
    grid-gap: 10px;
    align-items: center;
    justify-content: center;


    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }

    @media screen and (max-width: 500px) {
        grid-template-columns: 1fr;
    }
`

const PartnerImg = styled(Img) `
    position: relative;
    align-item: center;
    width: 30rem;
    filter: brightness(60%);


    &:hover {
        filter: brightness(100%);
    }

    @media screen and (max-width: 768px) {
        width: 90%;
        height: 90%;
    }

    @media screen and (max-width: 500px) {
        width: 80%;
        height: 80%;
    }
`

const Heading = styled.h1 `
    text-align: start;
    font-size: clamp(1.5rem, 5vw, 2rem);
    font-size: 4rem;
    margin-bottom: 3rem;

    @media screen and (max-width: 768px) {
        font-size: 2.5rem;
    }

    @media screen and (max-width: 500px) {
        font-size: 1.5rem;
    }
`

const Description = styled.div `
    padding: 2rem;
    font-weight: bold;
    font-size: 1.5rem;

    @media screen and (max-width: 768px) {
        font-size: 1.2rem;
    }

    @media screen and (max-width: 500px) {
        font-size: 1.2rem;
    }
`

const ExternalLink = styled.a `
    text-decorations:none; 
    color:inherit;
`