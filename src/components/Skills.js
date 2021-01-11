import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Button } from './Button'
import { ImLocation } from "react-icons/im"

const Skills = ({heading}) => {
    const data = useStaticQuery(graphql`
    query SkillsQuery {
        allSkillsJson {
          edges {
            node {
              alt
              Button
              name
              img {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    `)

    function getSkills (data) {
        const skillsArray = []
        data.allSkillsJson.edges.forEach((item, index) => {
            skillsArray.push(
                <SkillCard key={index}>
                    <SkillImg src={item.node.img.childImageSharp.fluid.src}
                    alt={item.node.alt}
                    fluid={item.node.img.childImageSharp.fluid} />
                    <SkillInfo>
                        <TextWrap>
                            <ImLocation />
                            <SkillTitle>{item.node.name}</SkillTitle>
                        </TextWrap>
                        <Button to="/company" primary="false" round="true" css={`position:absolute; top: 430px; left: -20px`}>
                            {item.node.Button}
                        </Button>
                    </SkillInfo>
                </SkillCard>
            )
        })

        return skillsArray
    }
    return (
        <div>
            <SkillsContainer>
                <SkillsHeading>{heading}</SkillsHeading>
                <SkillWrapper>{getSkills(data)}</SkillWrapper>
            </SkillsContainer>
        </div>
    )
}

export default Skills

const SkillsContainer = styled.div`
    min-height: 100vh;
    padding: 2rem calc((100vw - 1300px) / 2);
    color: #fff;
`

const SkillsHeading = styled.div `
    font-size: clamp(1.2rem, 5vw, 3rem);
    text-align: center;
    margin-bottom: 5rem;
    color: #000;
`

const SkillWrapper = styled.div `
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
    justify-items: center;
    padding: 0 2rem;

    @media screen and (max-width: 1200px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 868px) {
        grid-template-columns: 1fr;
    }
`
const SkillCard = styled.div `
    line-height: 2;
    width: 100%;
    height: 500px;
    position: relative;
    border-radius: 10px;
    transition: 0.2s ease;
`

const SkillImg = styled(Img) `
    height: 100%;
    max-width: 100%;
    position: absolute;
    border-radius: 10px;
    filter: brightness(70%);
    transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);

    &:hover {
        filter: brightness(100%);
    }
`

const SkillInfo = styled.div `
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 2rem;

    @media screen and (max-width: 280px) {
        padding: 0 1rem;
    }
`
const TextWrap = styled.div `
    display: flex;
    align-items: center;
    position: absolute;
    top: 375px;
`
const SkillTitle = styled.div `
    font-weight: 400;
    font-size: 1rem;
    margin-left: 0.5rem;
`
