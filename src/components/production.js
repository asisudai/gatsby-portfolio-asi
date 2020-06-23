import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from "@material-ui/core/Slider"
import Box from '@material-ui/core/Box';

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

const iOSBoxShadow =
  '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)';

const IOSSlider = withStyles({
  root: {
    color: '#3880ff',
    height: 2,
    padding: '15px 0 0 0px',
  },
  thumb: {
    height: 28,
    width: 28,
    backgroundColor: '#fff',
    boxShadow: iOSBoxShadow,
    marginTop: -14,
    marginLeft: -14,
    '&:focus, &:hover, &$active': {
      boxShadow: '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)',
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        boxShadow: iOSBoxShadow,
      },
    },
  },
  active: {},
  valueLabel: {
    '@media (min-width: 600px)': {
      visibility: 'hidden',
    },
    left: 'calc(-50% + 12px)',
    top: -18,
    '& *': {
      background: 'transparent',
      color: '#000',
    },
  },
  track: {
    height: 2,
  },
  rail: {
    height: 2,
    opacity: 0.5,
    backgroundColor: '#bfbfbf',
  },
  mark: {
    backgroundColor: '#bfbfbf',
    height: 8,
    width: 1,
    marginTop: -3,
  },
  markActive: {
    opacity: 1,
    backgroundColor: 'currentColor',
  },
  markLabel: {
    '@media (max-width: 600px)': {
      visibility:'hidden',
    },
  }
})(Slider);

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

  function valueLabelI(value) {
    return 'hi';
  }

  return (
    <OuterContainer>
      <Container>
        <NameHeader>{frontmatter.title}</NameHeader>
        <Description>{excerpt}</Description>
        <div className={classes.root}>
          {/* Doc: https://material-ui.com/api/slider/ */}
          <IOSSlider
            defaultValue={0}
            aria-labelledby="discrete-slider-custom"
            step={null}
            valueLabelDisplay="on"
            valueLabelFormat={valueLabel}
            marks={marks}
            min={0}
            max={7}
            getAriaValueText={null}
            getAriaLabel={valueLabelI}
            onChange={handleChange}
            onChangeCommitted={null}
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
