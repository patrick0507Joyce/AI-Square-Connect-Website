import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

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
                    <FounderImg 
                    src={item.node.img.childImageSharp.fluid.src}
                    alt={item.node.name}
                    fluid={item.node.img.childImageSharp.fluid}
                    />
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
        <FoundersContainer >
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
    margin-right: 1rem;
    padding: 3rem 0;
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
    padding: 2rem 0;
    transition: 2rem;
`

const FounderImg = styled(Img) `
    filter: brightness(70%);


    &:hover {
        filter: brightness(100%);
    }
`

const Heading = styled.h1 `
    text-align: start;
    font-size: clamp(1.5rem, 5vw, 2rem);
    font-size: 4rem;
    margin-bottom: 3rem;

    @media screen and (max-width: 768px) {
        font-size: 2rem;
    }

    @media screen and (max-width: 500px) {
        font-size: 1.5rem;
    }
`

const Name = styled.div `
    font-size: clamp(1rem, 2.5vw, 1.5rem);
    margin-bottom: 0.5rem;
    margin-left: 0.5rem;

    @media screen and (max-width: 768px) {
        font-size: 1.5rem;
    }

    @media screen and (max-width: 500px) {
        font-size: 1.2rem;
    }
`
const Title = styled.div `
    font-size: clamp(0.8rem, 2vw, 1.2rem);
    margin-bottom: 0.5rem;
    margin-left: 0.5rem;

    @media screen and (max-width: 768px) {
        font-size: 1.2rem;
    }

    @media screen and (max-width: 500px) {
        font-size: 1rem;
    }
`

const Description = styled.ul `
    padding: 1rem;

    @media screen and (max-width: 768px) {
        font-size: 1.2rem;
    }

    @media screen and (max-width: 500px) {
        font-size: 1rem;
    }
`