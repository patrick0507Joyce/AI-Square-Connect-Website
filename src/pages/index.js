import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import HomePoster from "../assets/videos/videoPosters/home-poster.jpg"
import Skills from "../components/frontpage/Skills"
import Testimonials from "../components/frontpage/Testimonials"
import Stats from "../components/frontpage/Stats"
import SolutionContext from "../components/frontpage/SolutionContext"
import Clients from "../components/frontpage/Clients"
import Advisors from "../components/frontpage/Advisors"
import Partners from "../components/frontpage/Partners"
import Features from "../components/frontpage/Features"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero buttonLink="/#index-strength" poster={HomePoster} />
    <Skills heading="Our Strength"/>
    <Testimonials />
    <Stats />
    <Features />
    <SolutionContext />
    <Clients />
    <Advisors />
    
  </Layout>
)

export default IndexPage
