import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import SContainer from "../components/container"
import Box from '@material-ui/core/Box';
import IOSSlider from "./slider"

const CSilder = styled.div`
    right: 0;
    left: 0;
    margin-right: auto;
    margin-left: auto;
    width: 85%;
`

const MarkdownContent = styled.div`

  li {
    text-align: start;
    margin-bottom: 0;
  }

  h3 {
    padding-top: 0.75em;

    @media only screen and (max-width: 800px) {
      min-height: 3rem;
    }

    @media only screen and (max-width: 500px) {
      min-height: 4rem;
    }
    @media only screen and (max-width: 400px) {
      min-height: 5rem;
    }
  }

  p {
    text-align: justify;
    }

  p.quotation {
      // position: relative;
      // left: 80%;
      color:gray;
      font-size: 80%;
      margin-top: -2em;
      min-height: 2rem;
    }


  p.message{
    min-height: 5rem;
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
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            key={index}
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

const Section = ({ data, markdowns }) => {
    const { frontmatter, excerpt } = data[0].node
    const marks = markdowns.map(function (m) { return {value: m.node.frontmatter.mark,
                                                       label: m.node.frontmatter.title}} )
    marks.sort((a, b) => (a.value > b.value) ? 1 : -1)
    const marks_max = Math.max.apply(Math, marks.map(function (o) { return o.value; }))
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
        <SContainer title={frontmatter.title} description={excerpt}>
          <CSilder>
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
          </CSilder>
          {markdowns &&
              markdowns.map(({ node }, i) => (
                  <TabPanel
                    value={value}
                    key={node.id}
                    index={node.frontmatter.mark}
                    >
                    <MarkdownContent dangerouslySetInnerHTML={{ __html: node.html }} />
                  </TabPanel>
              ))}
        </SContainer>
    )
}


TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};


export default Section
