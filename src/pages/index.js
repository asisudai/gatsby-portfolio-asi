import React from "react"
import { graphql } from "gatsby"
import LandingBio from "../components/landing-bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Skills from "../components/skills"
import Experience from "../components/experience"
import Section from "../components/section"
import Contact from "../components/contact"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title='Home' keywords={[`gatsby`, `application`, `react`]} />
    <LandingBio data={data.site} href={"#"+data.skills.title}/>
    <Experience data={data.experience} />
    <Skills data={data.skills}/>
    <Section data={data.production.edges} markdowns={data.productionmd.edges} />
    <Contact />
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

  skills:skillsJson {
    title
    description
    skills {
      CG_Animation {
        link
        name
      }
      Database {
        link
        name
      }
      Libraries {
        link
        name
      }
      Sys_Admin {
        link
        name
      }
      Web {
        link
        name
      }
      code {
        link
        name
      }
    }
    help {
      description
      title
    }
  }

  experience: experienceJson {
    jobs {
      primary
      secondary
    }
    title
    description
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
