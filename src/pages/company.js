import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import Founders from "../components/company/Founders"
import TextCompany from "../components/company/Text"

const CompanyPage = () => (
  <Layout>
    <SEO title="company"/>
    <Hero buttonLink="/company/#company-context"/>
    <TextCompany />
    <Founders />
  </Layout>
)

export default CompanyPage
