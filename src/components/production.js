import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import { makeStyles } from "@material-ui/core/styles"
import Slider from "@material-ui/core/Slider"
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

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

const SectionContainer = styled.div`
  display: 'none';,
`

const SectionCard = props => (
  <SectionContainer id={props.id}>
    <h3>{props.title}</h3>
    <p>{props.text}</p>
  </SectionContainer>
)

const useStyles = makeStyles({
  root: {
    height: 300,
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
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const Production = ({ data, prodsections }) => {
  const { frontmatter, excerpt } = data[0].node

  const marks = []
  for (var key in prodsections) {
    marks.push({
      value: prodsections[key].node.frontmatter.mark,
      label: prodsections[key].node.frontmatter.title,
    })
  }


  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
            valueLabelDisplay="off"
            marks={marks}
            min={0}
            max={5}
            getAriaValueText={null}
            onChange={null}
            onChangeCommitted={handleChange}
          />
          {prodsections &&
            prodsections.map(({ node }, i) => (
              <TabPanel value={value} index={node.frontmatter.mark} key={i}>
                {node.excerpt}
              </TabPanel>
              // <SectionCard id={node.frontmatter.mark}
              //              title={node.frontmatter.title}
              //              text={node.excerpt}/>
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

export default Production
