import React from "react"
import Layout from "../components/layout"
import VideoUrl from "../assets/videos/contact-video.mp4"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import TextContact from "../components/contact/TextContact"

const ContactPage = () => (
  <Layout>
    <SEO title="contact" />
    <Hero VideoUrl={VideoUrl} />
    <TextContact />
  </Layout>
)

export default ContactPage
