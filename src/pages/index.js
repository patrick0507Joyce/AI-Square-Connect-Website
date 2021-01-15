import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import Skills from "../components/Skills"
import Testimonials from "../components/Testimonials"
import Stats from "../components/Stats"
import Email from "../components/Email"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero buttonLink="/#index-strength" />
    <Skills heading="Our Strength"/>
    <Testimonials />
    <Stats />
  </Layout>
)

export default IndexPage
