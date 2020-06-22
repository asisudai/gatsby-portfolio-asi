import React from "react"
import Slider from "@material-ui/core/Slider"
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const marks = [
  {
    value: 0,
    label: "label 0",
    text: "text 0"
  },
  {
    value: 1,
    label: "label 50",
    text: "text 50"
  },
  {
    value: 2,
    label: "label 100",
    text: "text 100"
  },
]


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

function TabPanel(props) {
  const { children, cvalue, index, key, ...other } = props;
  console.log("i:", index, "v:", cvalue, "children:", children)

  return (
    <div
      role="tabpanel"
      hidden={cvalue !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {cvalue === index && (
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
  cvalue: PropTypes.any.isRequired,
};

export default function Test() {

  const classes = useStyles();
  const [cvalue, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <h1>Test</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>

      <Slider
        defaultValue={0}
        aria-labelledby="discrete-slider-custom"
        step={null}
        valueLabelDisplay="off"
        marks={marks}
        min={0}
        max={3}
        getAriaValueText={null}
        onChange={null}
        onChangeCommitted={handleChange}
      />

      {marks &&
        marks.map(({ value, label, text }, i) => (
          <TabPanel cvalue={cvalue} index={i} key={i}>
            Item {text}
          </TabPanel>
        ))}

      <TabPanel cvalue={cvalue} index={0}>
        Item One
      </TabPanel>
      <TabPanel cvalue={cvalue} index={1}>
        Item Two
      </TabPanel>
      <TabPanel cvalue={cvalue} index={2}>
        Item Three
      </TabPanel>


    </div>
  );
}
