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
    <LandingBio data={data.site}/>
    <Section data={data.production.edges} markdowns={data.productionmd.edges} />
    <Skills data={data.skills}/>
  </Layout>
)

export default IndexPage


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

  skills:skillsJson {
                skills {
                  code {
                    name
                    link
                  }
                  Web {
                    name
                    link
                  }
                  Sys_Admin {
                    name
                    link
                  }
                  Database {
                    name
                    link
                  }
                  CG_Animation {
                    name
                    link
                  }
                }
  }
}
`
