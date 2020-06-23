import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import { makeStyles } from '@material-ui/core/styles';

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
`

const OuterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 78vh;
`

const Description = styled.p`
  padding: 0;
  margin-bottom: 1rem;
  font-size: 1.4rem;
`

const NameHeader = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 0;
`

const useStyles = makeStyles({
  root: {
    height: 500,
  },
})


const Solution = ({ data }) => {
  const { frontmatter, excerpt } = data[0].node

  const classes = useStyles();

  return (
    <OuterContainer>
      <Container>
        <NameHeader>{frontmatter.title}</NameHeader>
        <Description>{excerpt}</Description>
        <div className={classes.root}>
        </div>
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

export default Solution
