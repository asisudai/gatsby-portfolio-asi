import React from "react"
import { graphql } from "gatsby"
import LandingBio from "../components/landing-bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Skills from "../components/skills"
import Experince from "../components/experience"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title='Home' keywords={[`gatsby`, `application`, `react`]} />
    <LandingBio data={data.site} href={"#"+data.skills.title}/>
    <Skills data={data.skills} href={"#" + data.experience.nodes[0].title}/>
    <Experince data={data.experience.nodes[0]} />
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
                  Libraries {
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
  experience: allExperienceJson {
    nodes {
      jobs {
        primary
        secondary
      }
      title
    }
  }
}
`
