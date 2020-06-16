import React from "react"
import { graphql } from "gatsby"
import LandingBio from "../components/landing-bio"
import Production from "../components/production"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <LandingBio />
    <Production data={data.production.edges} />
  </Layout>
)

export default IndexPage


export const pageQuery = graphql`
  {
    production: allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: {
          frontmatter: { draft: { eq: false } }
          fileAbsolutePath: { regex: "/production/" }
        }
      ) {
        totalCount
        edges {
          node {
            id
            frontmatter {
              title
              date(formatString: "DD MMMM, YYYY")
              rawDate: date
              path
            }
            fields {
              slug
              readingTime {
                text
              }
            }
            excerpt
            fileAbsolutePath
          }
        }
      }
    }
`
