import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"

const Container = styled.div`
  text-align: center;
`

const OuterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 78vh;
`

const TitleHeader = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 0;
`

const SubTitle = styled.p`
  padding: 0;
  margin-bottom: 1rem;
  font-size: 1.4rem;
`

const Description = styled.p`
  padding: 0;
  margin-bottom: 1rem;
  font-size: 1.4rem;
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
      <OuterContainer>
        <Container>
          <TitleHeader>{data.site.siteMetadata.title}</TitleHeader>
          <SubTitle>{data.site.siteMetadata.subtitle}</SubTitle>
          <Description>{data.site.siteMetadata.description}</Description>
        </Container>
      </OuterContainer>
    )}
  />
)

TitleHeader.propTypes = {
  siteTitle: PropTypes.string,
  subtitle: PropTypes.string,
}

TitleHeader.defaultProps = {
  siteTitle: ``,
  subtitle: ``,
}

export default LandingBio
