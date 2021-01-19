import React from "react"
import Layout from "../components/layout"
import VideoUrl from "../assets/videos/tech-video.mp4"
import TechnologyPoster from "../assets/videos/videoPosters/technology-poster.jpg"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import TextTechnology from "../components/technology/TextTechnology"

const TechnologyPage = () => (
  <Layout>
    <SEO title="company"/>
    <Hero VideoUrl={VideoUrl} poster={TechnologyPoster} buttonLink="/technology/#technology-platform"/>
    <TextTechnology />
  </Layout>
)

export default TechnologyPage
