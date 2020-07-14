import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import { AnchorLink } from "gatsby-plugin-anchor-links";



const OuterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding-top: 20vh;
  position: relative;
`

const Container = styled.div`
  text-align: center;
  max-width: 820px;

  @media only screen and (max-width: 800px) {
    max-width: 800px;
  }
  @media only screen and (max-width: 500px) {
    max-width: 500px;
  }
  @media only screen and (max-width: 400px) {
    max-width: 400px;
  }

  /* #### Mobile Phones Portrait #### */
  @media screen and (max-device-width: 480px) and (orientation: portrait) {
    max-width: 480px;
  }

  /* #### Mobile Phones Landscape #### */
  @media screen and (max-device-width: 640px) and (orientation: landscape) {
    max-width: 640px;
  }

  /* #### iPhone 4+ Portrait or Landscape #### */
  @media screen and (min-device-width: 320px) and (-webkit-min-device-pixel-ratio: 2) {
    max-width: 320px;
  }

  /* #### iPhone 5 Portrait or Landscape #### */
  @media (device-height: 568px) and (device-width: 320px) and (-webkit-min-device-pixel-ratio: 2) {
    max-width: 560px;
  }

  /* #### iPhone 6 and 6 plus Portrait or Landscape #### */
  @media (min-device-height: 667px) and (min-device-width: 375px) and (-webkit-min-device-pixel-ratio: 3) {
    max-width: 667px;
  }

  /* #### Tablets Portrait or Landscape #### */
  @media screen and (min-device-width: 768px) and (max-device-width: 1024px) {
    max-width: 768px;
  }

  /* #### Desktops #### */
  @media screen and (min-width: 1024px) {
    max-width: 820px;
  }
`

const NameHeader = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 0;
`

const SubTitle = styled.p`
  padding: 0;
  margin-bottom: 0.5rem;
  font-size: 1.4rem;
`

const Description = styled.p`
  padding: 0;
  margin-bottom: 0.5rem;
  font-size: 1.0rem;
`

const ContainerBottom = styled.div`
    // position: absolute;
    left: 50%;
    // margin-left: -30px;
    padding-top: 10vh;
    bottom: 0;
`

const Scroller = ({href}) => {
  return (
    <ContainerBottom>
      <div class="scroller">
        <AnchorLink to={href}><span></span>Scroll</AnchorLink>
        {/* <a href={href}><span></span>Scroll</a> */}
      </div>
    </ContainerBottom>
  )
}


const SContainer = ({ title, description, subtitle, href, children }) => {
  return (
    <OuterContainer id={title}>
      <Container>
        <NameHeader>{title}</NameHeader>
        <SubTitle>{subtitle}</SubTitle>
        <Description>{description}</Description>
        { children }
        {href && <Scroller href={href} />}
      </Container>
    </OuterContainer>
  )
}

NameHeader.propTypes = {
    siteTitle: PropTypes.string,
    subtitle: PropTypes.string,
}

NameHeader.defaultProps = {
    siteTitle: ``,
    subtitle: ``,
}

export default SContainer
