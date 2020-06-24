import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import IOSSlider from "./slider"

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
  @media screen and (max-device-width: 480px) and (orientation: portrait){
    max-width: 480px;
  }

  /* #### Mobile Phones Landscape #### */
  @media screen and (max-device-width: 640px) and (orientation: landscape){
    max-width: 640px;
  }

  /* #### iPhone 4+ Portrait or Landscape #### */
  @media screen and (min-device-width: 320px) and (-webkit-min-device-pixel-ratio: 2){
    max-width: 320px;
  }

  /* #### iPhone 5 Portrait or Landscape #### */
  @media (device-height: 568px) and (device-width: 320px) and (-webkit-min-device-pixel-ratio: 2){
    max-width: 560px;
  }

  /* #### iPhone 6 and 6 plus Portrait or Landscape #### */
  @media (min-device-height: 667px) and (min-device-width: 375px) and (-webkit-min-device-pixel-ratio: 3){
    max-width: 667px;
  }

  /* #### Tablets Portrait or Landscape #### */
  @media screen and (min-device-width: 768px) and (max-device-width: 1024px){
        max-width: 768px;
  }

  /* #### Desktops #### */
  @media screen and (min-width: 1024px){
    max-width: 820px;
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

const MarkdownContent = styled.div`

  li {
    text-align: start;
    margin-bottom: 0;
  }

  p {
    text-align: justify;
    }
  span {
    max-width: 200px;
  }
  a {
    text-decoration: none;
    position: relative;

    background-image: linear-gradient(
      rgba(255, 250, 150, 0.8),
      rgba(255, 250, 150, 0.8)
    );
    background-repeat: no-repeat;
    background-size: 100% 0.2em;
    background-position: 0 88%;
    transition: background-size 0.25s ease-in;
    &:hover {
      background-size: 100% 88%;
    }
  }
`

function TabPanel(props) {
    const { children, value, index, key, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    {children}
                </Box>
            )}
        </div>
    );
}

const useStyles = makeStyles({
    root: {
        height: 500,
    },
})

const Section = ({ data, markdowns }) => {
    const { frontmatter, excerpt } = data[0].node
    const marks = markdowns.map(function (m) { return {value: m.node.frontmatter.mark,
                                                       label: m.node.frontmatter.title}} )
    marks.sort((a, b) => (a.value > b.value) ? 1 : -1)
    const marks_max = Math.max.apply(Math, marks.map(function (o) { return o.value; }))
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    function handleChange(event, newValue) {
      setValue(newValue);
    }

    function valueLabel(value) {
      for (let i = 0; i < marks.length; i++) {
        if (marks[i].value === value) {return marks[i].label;
        }
      }
    }

    return (
        <OuterContainer>
            <Container>
                <NameHeader>{frontmatter.title}</NameHeader>
                <Description>{excerpt}</Description>
                <div className={classes.root}>
                    <IOSSlider
                        defaultValue={0}
                        aria-labelledby="discrete-slider-custom"
                        step={null}
                        valueLabelDisplay="on"
                        valueLabelFormat={valueLabel}
                        marks={marks}
                        min={0}
                        max={marks_max}
                        getAriaValueText={null}
                        getAriaLabel={null}
                        onChange={handleChange}
                        onChangeCommitted={null}
                    />
                    {markdowns &&
                        markdowns.map(({ node }, i) => (
                            <TabPanel
                                value={value}
                                index={node.frontmatter.mark}
                                key={i}
                            >
                              <MarkdownContent dangerouslySetInnerHTML={{ __html: node.html }} />
                            </TabPanel>
                        ))}
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

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};


export default Section
