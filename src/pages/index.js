import React from "react"
import { graphql } from "gatsby"
import LandingBio from "../components/landing-bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Skills from "../components/skills"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title='Home' keywords={[`gatsby`, `application`, `react`]} />
    <LandingBio data={data.site}/>
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
}
`
