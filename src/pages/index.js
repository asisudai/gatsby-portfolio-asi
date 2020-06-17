import React from "react"
import { graphql } from "gatsby"
import LandingBio from "../components/landing-bio"
import Production from "../components/production"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <LandingBio />
    <Production data={data.production.edges} prodsections={data.prodsections.edges} />
  </Layout>
)

export default IndexPage


export const pageQuery = graphql`
         {
           production: allMarkdownRemark(
             sort: { fields: [frontmatter___date], order: DESC }
             filter: { fileAbsolutePath: { regex: "/production/index/" } }
           ) {
             totalCount
             edges {
               node {
                 id
                 frontmatter {
                   title
                 }
                 excerpt
               }
             }
           }
           prodsections: allMarkdownRemark(
             sort: { fields: [frontmatter___date], order: DESC }
             filter: {
               fileAbsolutePath: { regex: "/production/" }
               frontmatter: { mark: { ne: null } }
             }
           ) {
             totalCount
             edges {
               node {
                 id
                 frontmatter {
                   title
                   mark
                 }
                 excerpt
               }
             }
           }
         }
       `
