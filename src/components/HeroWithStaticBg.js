import { Button } from './Button'
import React from 'react'
import styled from 'styled-components'

const HeroWithStaticBg = ({ImageUrl, title, subtitle}) => {
    return (
        <HeroContainer>
            <HeroBg>
                <ImageBg src={ImageUrl} type="image/jpg" />
            </HeroBg>
            <HeroContent>
                <HeroItems>
                <HeroH1>{title ? title : "Empower with A.I."}</HeroH1>
                    <HeroP>{subtitle ? subtitle : "Augumented Intelligence for Asset Managers"}</HeroP>
                    <Button primary="true" big="true" round="true" to="/company">
                        Try now
                    </Button>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroWithStaticBg

const HeroContainer = styled.div `
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 0;
    position: relative;
    margin-top: -80px;
    color: #fff;

    :before {
        content: "";
        position: relative;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 2;
        background: linear-gradient(
            180deg, 
            rgba(0,0,0,0.2) 0%, 
            rgba(0,0,0,0.6) 100%
            ),
            linear-gradient(180deg, 
            rgba(0,0,0,0.2) 0%, 
            rgba(0,0,0,0.6) 100%
            )
    }
`
const HeroBg = styled.div `
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`
const ImageBg = styled.img `
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    filter: brightness(40%);
`

const HeroContent = styled.div `
    z-index: 3;
    height: calc(100vh - 80px);
    max-height: 100%;
    padding: 0rem calc((100vw - 1300px) / 2)
`

const HeroItems = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-item: center;
    text-align: center;
    height: 100vh;
    max-height: 100%;
    padding: 0;
    color: #fff;
    line-height: 1.1;
`

const HeroH1 = styled.h1 `
    font-size: clamp(1.5rem, 6vw, 4rem);
    margin-bottom: 1.5rem;
    letter-spacing: 3px;
    padding: 0 1rem;
`

const HeroP = styled.p `
    font-size: clamp(1rem, 1.5vw, 1.5rem);
    margin-bottom: 2rem;
    font-weight: 400;
`