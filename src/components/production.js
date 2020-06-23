import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import { makeStyles } from "@material-ui/core/styles"
import Slider from "@material-ui/core/Slider"
import Box from '@material-ui/core/Box';

const Container = styled.div`
  text-align: center;
  max-width: 820px;
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

const useStyles = makeStyles({
  root: {
    height: 500,
  },
})

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



const Production = ({ data, prodsections }) => {
  const { frontmatter, excerpt } = data[0].node

  const marks = []
  for (var key in prodsections) {
    marks.push({
      value: prodsections[key].node.frontmatter.mark,
      label: prodsections[key].node.frontmatter.title,
    })
  }
  marks.sort((a, b) => (a.value > b.value) ? 1 : -1)


  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function valueLabel(value) {
    return marks[value].label;
  }

  return (
    <OuterContainer>
      <Container>
        <NameHeader>{frontmatter.title}</NameHeader>
        <Description>{excerpt}</Description>
        <div className={classes.root}>
          {/* Doc: https://material-ui.com/api/slider/ */}
          <Slider
            defaultValue={0}
            aria-labelledby="discrete-slider-custom"
            step={null}
            valueLabelDisplay="on"
            valueLabelFormat={valueLabel}
            marks={marks}
            min={0}
            max={7}
            getAriaValueText={null}
            onChange={null}
            onChangeCommitted={handleChange}
          />
          {prodsections &&
            prodsections.map(({ node }, i) => (
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

export default Production
