import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import LinkedinLogo from '../../assets/images/founders/Linkedin-logo.png'

const Founders = () => {
    const data = useStaticQuery(graphql`
    query FoundersQuery {
        allFoundersDataJson {
          edges {
            node {
              img {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              name
              title
              desc
              linkedin
            }
          }
        }
      }      
    `)

    function getFounders (data) {
        const foundersArray = [];
        data.allFoundersDataJson.edges.forEach((item, index) => {
            foundersArray.push (
                <StatsBox key={index}>
                    <ImageWrapper>
                    <FounderImg 
                    src={item.node.img.childImageSharp.fluid.src}
                    alt={item.node.name}
                    fluid={item.node.img.childImageSharp.fluid}
                    />
                    <ExternalLink href={item.node.linkedin} target="_blank">
                    <FounderOverlay>
                        <h4>{item.node.name}</h4>
                        <p>{item.node.title}</p>
                        <img src={LinkedinLogo} />
                    </FounderOverlay>
                    </ExternalLink>
                    </ImageWrapper>
                    <Name>{item.node.name}</Name>
                    <Title>{item.node.title}</Title>
                    <Description>
                        {item.node.desc.map((content, index) => (
                            <li key={index} css={`padding:0.5rem 0;`}>
                                {content}
                            </li>
                        ))}
                    </Description>
                </StatsBox>
            )
        })
        return foundersArray
    }

    return (
        <FoundersContainer id="company-founder">
            <Heading>
                Founders
            </Heading>
            <Wrapper>
                {getFounders(data)}
            </Wrapper>
        </FoundersContainer>
    )
}

export default Founders


const FoundersContainer = styled.div `
    width : 100%;
    background : #fff;
    color: #000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 3.5rem 0;

    @media screen and (max-width: 768px) {
        padding: 0.5rem 0;
    }
`

const Wrapper = styled.div `
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
    align-items: center;


    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }

    @media screen and (max-width: 500px) {
        grid-template-columns: 1fr;
    }
`

const StatsBox = styled.div `
    height: 100%;
    width: 100%;
    padding: 2rem 0rem;
    transition: 2rem;
`
const ImageWrapper = styled.div `
    position: relative;
`

const FounderOverlay = styled.div `
    position: absolute;
    top: 0;
    left: 3rem;
    width: 70%;
    height: 100%;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.2);
    opacity: 0;

    h4 {
        font-size: 1.5rem;
    }

    p {
        font-size: 1.2rem;
        margin-top: 0.5rem;
    }

    img {
        width: 50%;
    }

    &:hover {
        opacity: 1;
    }

`

const ExternalLink = styled.a `
    text-decorations:none; 
    color:inherit;
`

const FounderImg = styled(Img) `
    display: block;
    width: 70%;
    margin: auto;

    &:hover {
        filter:brightness(70%);
    }

`

const Heading = styled.h2 `
    text-align: start;
    font-size: clamp(1.5rem, 3vw, 3rem);
    margin-bottom: 3rem;
`

const Name = styled.div `
    font-size: clamp(1rem, 2.5vw, 1.5rem);
    padding: 0.2rem 0 0 1.5rem;

    @media screen and (max-width: 768px) {
        font-size: 1.5rem;
    }

    @media screen and (max-width: 500px) {
        font-size: 1.2rem;
    }
`
const Title = styled.div `
    font-size: clamp(0.8rem, 2vw, 1.2rem);
    margin: 0.2rem 0 0 1.5rem;

    @media screen and (max-width: 768px) {
        font-size: 1.2rem;
    }

    @media screen and (max-width: 500px) {
        font-size: 1rem;
    }
`

const Description = styled.ul `
    padding: 0.5rem 2rem 2rem 2rem;

    @media screen and (max-width: 768px) {
        font-size: 1.2rem;
    }

    @media screen and (max-width: 500px) {
        font-size: 1rem;
    }
`


