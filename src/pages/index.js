import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import HomePoster from "../assets/videos/videoPosters/home-poster.jpg"
import Skills from "../components/Skills"
import Testimonials from "../components/Testimonials"
import Stats from "../components/Stats"
import Email from "../components/Email"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero buttonLink="/#index-strength" poster={HomePoster} />
    <Skills heading="Our Strength"/>
    <Testimonials />
    <Stats />
  </Layout>
)

export default IndexPage
