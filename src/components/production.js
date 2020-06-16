import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import { makeStyles } from "@material-ui/core/styles"
import Slider from "@material-ui/core/Slider"

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

const Description = styled.p`
  padding: 0;
  margin-bottom: 1rem;
  font-size: 1.4rem;
`

const NameHeader = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 0;
`

const marks = [
  {
    value: 0,
    label: "Story",
  },

  {
    value: 20,
    label: "Layout",
  },
  {
    value: 40,
    label: "Animation",
  },
  {
    value: 100,
    label: "Delivery",
  },
]

function valuetext(value) {
  return `${value}°C`
}

const useStyles = makeStyles({
  root: {
    height: 300,
  },
})

const Production = () => {
  const classes = useStyles()
  return (
    <OuterContainer>
      <Container>
        <NameHeader>Production</NameHeader>
        <Description>
          Production comes with challenges. We resolve them with workflows,
          communication, code and education.
        </Description>
        <div className={classes.root}>
          <Slider
            defaultValue={20}
            getAriaValueText={valuetext}
            aria-labelledby="discrete-slider-custom"
            step={10}
            valueLabelDisplay="off"
            // orientation="vertical"
            // aria-labelledby="vertical-slider"
            marks={marks}
          />
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

export default Production
