import React from "react"
import { graphql } from "gatsby"
import LandingBio from "../components/landing-bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from "../components/section"
import Skills from "../components/skills"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title='Home' keywords={[`gatsby`, `application`, `react`]} />
    <LandingBio />
    <Section data={data.production.edges} markdowns={data.productionmd.edges} />
    <Skills />
  </Layout>
)

export default IndexPage


export const pageQuery = graphql`
         {
            site: site {
                    siteMetadata {
                      title
                      subtitle
                    }
                  }
           production: allMarkdownRemark(
             sort: { fields: [frontmatter___date], order: DESC }
             filter: { fileAbsolutePath: { regex: "/production/index/" } }
           ) {
             totalCount
             edges {
               node {
                 frontmatter {
                   title
                 }
                 excerpt
               }
             }
           }
           productionmd: allMarkdownRemark(
             sort: { fields: [frontmatter___date], order: DESC }
             filter: {
               fileAbsolutePath: { regex: "/production/" }
               frontmatter: { mark: { ne: null } }
             }
           ) {
             totalCount
             edges {
               node {
                 frontmatter {
                   title
                   mark
                 }
                 html
               }
             }
           }
         }
       `
