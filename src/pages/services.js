import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Section from "../components/section"

const ServicesPage = ({ data }) => (
    <Layout>
        <SEO title='Home' keywords={[`gatsby`, `application`, `react`]} />
        <Section data={data.production.edges} markdowns={data.productionmd.edges} />
    </Layout>
)

export default ServicesPage

export const pageQuery = graphql`
{
  site: site {
          siteMetadata {
            title
            subtitle
            description
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
        id
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
        id
      }
    }
  }
}
`
