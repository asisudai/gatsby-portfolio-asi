import React from "react"
import { graphql } from "gatsby"
import LandingBio from "../components/landing-bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from "../components/section"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <LandingBio />
    <Section data={data.production.edges} markdowns={data.productionmd.edges} />
    <Section data={data.solution.edges} markdowns={data.solutionmd.edges}/>
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
                 frontmatter {
                   title
                 }
                 excerpt
               }
             }
           }
           productionmd:allMarkdownRemark(
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
           solution: allMarkdownRemark(
             sort: { fields: [frontmatter___date], order: DESC }
             filter: { fileAbsolutePath: { regex: "/solution/index/" } }
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
           solutionmd:allMarkdownRemark(
             sort: { fields: [frontmatter___date], order: DESC }
             filter: {
               fileAbsolutePath: { regex: "/solution/" }
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
