import React from "react"
import Layout from "../components/layout"
import VideoUrl from "../assets/videos/benefit-video.mp4"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import TextBenefit from "../components/benefit/TextBenefit"

const TechnologyPage = () => (
  <Layout>
    <SEO title="company"/>
    <Hero VideoUrl={VideoUrl} buttonLink="/benefit/#benefit-strategies"/>
    <TextBenefit />
  </Layout>
)

export default TechnologyPage
