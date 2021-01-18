import { Button } from '../components/Button'
import React from 'react'
import styled from 'styled-components'
import HomeVideo from '../assets/videos/home-video-1.mp4'
import HomePoster from "../assets/videos/videoPosters/home-poster.jpg"


const Hero = ({poster, VideoUrl, title, subtitle, buttonLink}) => {
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg 
                src={VideoUrl ? VideoUrl : HomeVideo} 
                poster={poster ? poster : HomePoster}
                type="video/mp4" 
                autoPlay 
                loop 
                muted 
                playsInline />
            </HeroBg>
            <HeroContent>
                <HeroItems>
                    <HeroH1>{title ? title : "Empower with A.I."}</HeroH1>
                    <HeroP>{subtitle ? subtitle : "Augumented Intelligence for Asset Managers"}</HeroP>
                    <Button primary="true" big="true" round="true" to={buttonLink ? buttonLink : "/company"}>
                        See More
                    </Button>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero

const HeroContainer = styled.div `
    background: ##FFF;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0 0 2rem 0;
    position: relative;
    
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
    top: 80px;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 90%;
    overflow: hidden;
`
const VideoBg = styled.video `
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    filter: brightness(75%);
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