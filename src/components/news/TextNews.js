import React from 'react'
import styled from "styled-components"

const TextNews = () => {
    return (
        <TextContainer>
            <Wrapper>
                
            </Wrapper>
        </TextContainer>
    )
}

export default TextNews

const TextContainer = styled.div`
  wdith: 100%;
  background: #fff;
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4rem calc((100vw - 1300px) / 2);
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

const NewsBox = styled.div`
  height: 100%;
  width: 100%;
  padding: 2rem 0.5rem;
  transition: 2rem;
`