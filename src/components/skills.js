import React from "react"
import { StaticQuery, graphql } from "gatsby"
import SContainer from "../components/container"


const Skills = () => (
    <StaticQuery
        query={graphql`
      query SkillsSiteTitleQuery {
        site {
          siteMetadata {
            title
            subtitle
            description
          }
        }
      }
    `}
        render={data => (
            <SContainer title={data.site.siteMetadata.title} description={data.site.siteMetadata.description}>
                <p>test</p>
            </SContainer>

        )}
    />
)


export default Skills
