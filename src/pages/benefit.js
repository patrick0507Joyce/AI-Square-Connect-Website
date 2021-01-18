import React from "react"
import Layout from "../components/layout"
import VideoUrl from "../assets/videos/benefit-video.mp4"
import BenefitPoster from "../assets/videos/videoPosters/benefit-poster.jpg"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import TextBenefit from "../components/benefit/TextBenefit"
import TechnologyPoster from "../assets/videos/videoPosters/technology-poster.jpg"

const TechnologyPage = () => (
  <Layout>
    <SEO title="company"/>
    <Hero VideoUrl={VideoUrl} poster={BenefitPoster} buttonLink="/benefit/#benefit-strategies"/>
    <TextBenefit />
  </Layout>
)

export default TechnologyPage
