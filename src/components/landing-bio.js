import React from "react"
import { StaticQuery, graphql } from "gatsby"
import SContainer from "../components/container"
import styled from "@emotion/styled"

const Container = styled.div`
  padding-top: 30vh;
`

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
      <Container>
        <SContainer title={data.site.siteMetadata.title}
                    description={data.site.siteMetadata.description}
                    subtitle={data.site.siteMetadata.subtitle}>
        </SContainer>
      </Container>
    )}
  />
)

export default LandingBio
