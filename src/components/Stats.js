import React from 'react'
import styled from 'styled-components'
import { StatsData } from "../data/StatsData";

const Stats = () => {
    return (
        <StatsContainer >
            <Heading>
                Why Choose Us?
            </Heading>
            <Wrapper>
                {StatsData.map((item, index) => {
                    return (
                        <StatsBox key={index}>
                            <Icon>{item.icon}</Icon>
                            <Title>{item.title}</Title>
                            <Description>{item.desc}</Description>
                        </StatsBox>
                    )
                })}
            </Wrapper>
        </StatsContainer>
    )
}

export default Stats

const StatsContainer = styled.div `
    width : 100%;
    background : #fff;
    color: #000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 5rem 0;

    @media screen and (max-width: 768px) {
        margin: 3rem 0;
    }

`

const Wrapper = styled.div `
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 4rem;
    align-items: center;
    padding: 0 0 0 2rem;


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

const Heading = styled.h1 `
    text-align: start;
    font-size: clamp(1.5rem, 5vw, 2rem);
    margin-bottom: 3rem;
    padding: 0 0 0 1rem;
`

const Icon = styled.div `
    font-size: 3rem;
    margin-bottom: 1rem;
`
const Title = styled.div `
    font-size: clamp(1rem, 2.5vw, 1.5rem);
    margin-bottom: 0.5rem;
`
const Description = styled.p `

`