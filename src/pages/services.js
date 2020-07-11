import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import styled from "@emotion/styled"
// import Experince from "../components/experience"
import Section from "../components/section"

const Container = styled.div`
  padding-top: 20vh;
  display: 'flex',
`

const ServicesPage = ({ data }) => (
    <Layout>
        <SEO title='Services' keywords={[`gatsby`, `application`, `react`]} />
        <Container color="text.primary">
          <Section data={data.production.edges} markdowns={data.productionmd.edges} />
        </Container>
        {/* <Experince data={data.experience.nodes}/> */}
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

// experience: allExperienceJson {
//     nodes {
//       primary
//       secondary
//     }
//   }
