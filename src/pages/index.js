import React from "react"

import LandingBio from "../components/landing-bio"
import Production from "../components/production"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <LandingBio />
    <Production />
  </Layout>
)

export default IndexPage
