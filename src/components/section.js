import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import SContainer from "../components/container"
import Box from '@material-ui/core/Box';
import IOSSlider from "./slider"

const MarkdownContent = styled.div`

  li {
    text-align: start;
    margin-bottom: 0;
  }

  p {
    text-align: justify;
    }

  p.quotation {
      text-align: center;
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
        </SContainer>
    )
}


TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};


export default Section
