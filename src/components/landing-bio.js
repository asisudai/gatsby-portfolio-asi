import React from "react"
import { StaticQuery, graphql } from "gatsby"
import SContainer from "../components/container"

const LandingBio = () => (
  <StaticQuery
    query={graphql`
      query LandingSiteTitleQuery {
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
      <SContainer title={data.site.siteMetadata.title}
                  description={data.site.siteMetadata.description}
                  subtitle={data.site.siteMetadata.subtitle}>
      </SContainer>
    )}
  />
)

export default LandingBio
