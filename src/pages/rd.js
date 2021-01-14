import React from "react"
import Layout from "../components/layout"
import ImageUrl from "../assets/images/rdContext/context-1.png"
import SEO from "../components/seo"
import HeroWithStaticBg from "../components/HeroWithStaticBg"
import TextRd from "../components/rd/TextRd"

const RDPage = () => (
  <Layout>
    <SEO title="contact" />
    <HeroWithStaticBg 
    ImageUrl={ImageUrl} 
    title={'Research'} 
    subtitle={'Cutting Edge Research, leveraging Statistics, Machine Learning and Finance'}
    buttonLink={"/rd/#rd-content"}
    />
    <TextRd />
  </Layout>
)

export default RDPage
