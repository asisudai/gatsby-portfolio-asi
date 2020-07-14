/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import PageviewIcon from '@material-ui/icons/Pageview';

import Header from "./header"
import "./layout.css"

const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 0 1.0875rem 1rem;
  padding-top: 0;
`

const SocialLink = styled(Link)`
  color: black;
  margin-right: 10px;
  margin-left: 10px;
  text-decoration: none;
  display: inline-block;
  position: relative;

  ::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.8);
    transform-origin: bottom right;
    transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
  }

  :hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`

const GatsbyLink = styled.a`
  margin-left: 5px;
`

const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column wrap;
  align-content: center;
  padding-top: 8vh;
`

const FooterRow = styled.div`
  // display: flex;
  // width:100%;
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            github
            fork
            linkedin
            photography
            wiki
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title}
                github={data.site.siteMetadata.github}
                linkedin={data.site.siteMetadata.linkedin}/>
        <Content>
          <main>{children}</main>
          <Footer>
            <FooterRow>
              <SocialLink to={data.site.siteMetadata.github} target="_blank" rel="noreferrer">
                <GitHubIcon fontSize='small' />
              </SocialLink>
              <SocialLink to={data.site.siteMetadata.linkedin} target="_blank" rel="noreferrer">
                <LinkedInIcon fontSize='small' />
              </SocialLink>
              <SocialLink to={data.site.siteMetadata.photography} target="_blank" rel="noreferrer">
                <CameraAltIcon fontSize='small' />
              </SocialLink>
              <SocialLink to={data.site.siteMetadata.wiki} target="_blank" rel="noreferrer">
                <PageviewIcon fontSize='small' />
              </SocialLink>
            </FooterRow>
            <FooterRow>
              <span>© {new Date().getFullYear()}, Built with {` `}</span>
              <GatsbyLink href="https://www.gatsbyjs.org" target="_blank" rel="noreferrer">Gatsby</GatsbyLink>
              <span>{` `}~{` `}</span>
              <GatsbyLink href={data.site.siteMetadata.fork} target="_blank" rel="noreferrer">Fork it!</GatsbyLink>
            </FooterRow>
          </Footer>
        </Content>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
