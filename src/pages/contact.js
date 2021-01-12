import React from "react"
import Layout from "../components/layout"
import VideoUrl from "../assets/videos/contact-video.mp4"
import SEO from "../components/seo"
import Hero from "../components/Hero"

const ContactPage = () => (
  <Layout>
    <SEO title="contact" />
    <Hero VideoUrl={VideoUrl} />
    
  </Layout>
)

export default ContactPage
