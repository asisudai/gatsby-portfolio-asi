import React from "react"
import { graphql } from "gatsby"
import LandingBio from "../components/landing-bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Skills from "../components/skills"
import Experience from "../components/experience"
// import Section from "../components/section"
import Contact from "../components/contact"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title='Home' keywords={[`gatsby`, `application`, `react`]} />
    <LandingBio data={data.site} bio={data.bio.edges[0]} href={"#" + data.skills.title}/>
    <Skills data={data.skills}/>
    <Experience data={data.experience} />
    {/* <Section data={data.production.edges} markdowns={data.productionmd.edges} /> */}
    <Contact data={data.site}/>
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
            github
            linkedin
            photography
          }
        }

  skills:skillsJson {
    title
    description
    skills {
      code {
        link
        name
      }
      Database {
        link
        name
      }
      CG_Animation {
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

  bio: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }
    filter: { fileAbsolutePath: { regex: "/bio/" } }
  ) {
    totalCount
    edges {
      node {
        frontmatter {
          title
        }
        html
      }
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
