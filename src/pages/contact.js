import React from "react"
import Layout from "../components/layout"
import VideoUrl from "../assets/videos/contact-video.mp4"
import ContactPoster from "../assets/videos/videoPosters/contact-poster.jpg"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import TextContact from "../components/contact/TextContact"

const ContactPage = () => (
  <Layout>
    <SEO title="contact" />
    <Hero VideoUrl={VideoUrl} title={"CONTACT US"} poster={ContactPoster} subtitle={" "} buttonLink={"/contact/#contact-content"}/>
    <TextContact />
  </Layout>
)

export default ContactPage
