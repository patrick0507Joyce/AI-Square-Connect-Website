import React from "react"
import Layout from "../components/layout"
import ImageUrl from "../assets/images/rdContext/context-1.png"
import SEO from "../components/seo"
import HeroWithStaticBg from "../components/HeroWithStaticBg"
import TextContact from "../components/contact/TextContact"

const RDPage = () => (
  <Layout>
    <SEO title="contact" />
    <HeroWithStaticBg ImageUrl={ImageUrl} title={'RESEARCH'} subtitle={'OUR GOAL IS TO PROVIDE CUTTING EDGE RESEARCH LEVERAGING STATISTICS, MACHINE LEARNING AND FINANCE'}/>
  </Layout>
)

export default RDPage
