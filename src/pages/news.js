import React from "react"
import Layout from "../components/layout"
import ImageUrl from "../assets/images/newsContext/news.jpg"
import SEO from "../components/seo"
import HeroWithStaticBg from "../components/HeroWithStaticBg"
import TextNews from "../components/news/TextNews"

const NewsPage = () => (
  <Layout>
    <SEO title="news"/>
    <HeroWithStaticBg ImageUrl={ImageUrl} />    
    <TextNews />
  </Layout>
)

export default NewsPage
