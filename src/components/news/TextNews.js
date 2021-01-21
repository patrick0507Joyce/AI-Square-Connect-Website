import React from "react"
import styled from "styled-components"
import ContextImg1 from "../../assets/images/newsContext/context-1.png"
import ContextImg3 from "../../assets/images/newsContext/context-3.png"
import ContextImg4 from "../../assets/images/newsContext/context-4.png"
import ContextImg5 from "../../assets/images/newsContext/context-5.png"
import ContextImg6 from "../../assets/images/newsContext/context-6.png"
import ContextImg7 from "../../assets/images/newsContext/context-7.png"
import ContextImg13 from "../../assets/images/newsContext/context-13.png"


const TextNews = () => {
  return (
    <TextContainer id="news-content">
      <ContentWrapper>
        <ColumnOne>
          <Images src={ContextImg1} />
        </ColumnOne>
        <ColumnTwo>
          <News>
            <h3>
              October 2020: International Conference on Automated Planning and
              Scheduling (ICAPS)
            </h3>
            <p>
              In collaboration with Société Générale, David Saltiel attended the
              workshop as speaker about{" "}
              <b>
                bridging the gap between Markowitz planning and deep
                reinforcement learning
              </b>
              .
            </p>
          </News>
        </ColumnTwo>
      </ContentWrapper>
      <ContentWrapper>
        <ColumnOne>
          <Images src={ContextImg1} />
        </ColumnOne>
        <ColumnTwo>
          <News>
            <h3>
              October 2020: International Conference on Automated Planning and
              Scheduling (ICAPS)
            </h3>
            <p>
              In collaboration with Société Générale, David Saltiel attended the
              workshop as speaker on{" "}
              <b>Timing Hedges with Deep Reinforcement Learning</b>.
            </p>
          </News>
        </ColumnTwo>
      </ContentWrapper>
      <ContentWrapper>
        <ColumnOne>
          <Images src={ContextImg3} />
        </ColumnOne>
        <ColumnTwo>
          <News>
            <h3>
              October 2020: European Symposium on Artificial Neural Networks (ESANN)
            </h3>
            <p>
              David Saltiel spoke on work about <b>similarities between policy gradient methods in reinforcement and supervised learning</b>.
            </p>
          </News>
        </ColumnTwo>
      </ContentWrapper>
      <ContentWrapper>
        <ColumnOne>
          <Images src={ContextImg4} />
        </ColumnOne>
        <ColumnTwo>
          <News>
            <h3>
            September 2020, European Conference on Machine Learning (ECML-PKDD)
            </h3>
            <p>
            David Saltiel attended the workshop on mining data for financial applications as speaker on <b>Trade Selection with Supervised Learning and OCA</b>.
            </p>
          </News>
        </ColumnTwo>
      </ContentWrapper>
      <ContentWrapper>
        <ColumnOne>
          <Images src={ContextImg5} />
        </ColumnOne>
        <ColumnTwo>
          <News>
            <h3>
            September 2020, European Conference on Machine Learning (ECML-PKDD)
            </h3>
            <p>
            Ai For Alpha presented our joined work with Homa Capital on 
            <b>using deep reinforcement learning (DRL) for portfolio allocation</b>
             at the premier European machine learning and data mining conference
            </p>
          </News>
        </ColumnTwo>
      </ContentWrapper>
      <ContentWrapper>
        <ColumnOne>
          <Images src={ContextImg6} />
        </ColumnOne>
        <ColumnTwo>
          <News>
            <h3>
              May 2020: Genetic and Evolutionary Computation Conference (GECCO)
            </h3>
            <p>
            Ai For Alpha's data scientist, David Saltiel, attends the 
            Genetic and Evolutionary Computation Conference (GECCO) as speaker on work about <b>Bayesian version of CMA-ES.</b>
            </p>
          </News>
        </ColumnTwo>
      </ContentWrapper>
      <ContentWrapper>
        <ColumnOne>
          <Images src={ContextImg7} />
        </ColumnOne>
        <ColumnTwo>
          <News>
            <h3>
              May 2020: Ai for Alpha receives the Fintech Label by Finance
              Innovation
            </h3>
            <p>
              The Finance Innovation Label was awarded by the competitive
              cluster Finance Innovation in Paris.
            </p>
          </News>
        </ColumnTwo>
      </ContentWrapper>
      <ContentWrapper>
        <ColumnOne>
          <Images src={ContextImg13} />
        </ColumnOne>
        <ColumnTwo>
          <News>
            <h3>
              March 2019: 12th Financial Risks International Forum
            </h3>
            <p>
            David Saltiel, attended the 12th Financial Risks International Forum as speaker on work about <b>Trade Selection with Supervised Learning and OCA</b>.
            </p>
          </News>
        </ColumnTwo>
      </ContentWrapper>
      
      
    </TextContainer>
  )
}

export default TextNews

const TextContainer = styled.div`
  width: 100%;
  background: #fff;
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4rem 0;
`

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  padding: 1rem 2rem;
  grid-gap: 2rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
const ColumnOne = styled.div`
  margin: auto;
`

const ColumnTwo = styled.div`
  align: start;
`

const Images = styled.img`
  border-radius: 10px;
  width: 250px;
  @media screen and (max-width: 768px) {
    margin: 2rem 0;
    width: 90%;
  }
`

const News = styled.div`
  padding-right: 2rem;
  
  h3 {
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
    font-weight: bold;
  }

  p {
    font-size: 1.2rem;
    color: #3b3b3b;
    line-height: 1.2;

    @media screen and (max-width: 768px) {
      display: none;
    }
  }

  ul {
    padding: 0 1.5rem;

    @media screen and (max-width: 768px) {
      display: none;
    }
  }

  li {
    font-size: 1.5rem;
    color: #3b3b3b;
    line-height: 2rem;
  }
`
const ExternalLink = styled.a`
  text-decorations: none;
  color: inherit;
`
