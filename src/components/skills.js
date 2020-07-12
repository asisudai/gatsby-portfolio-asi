import React from "react"
import SContainer from "../components/container"
import Chip from '@material-ui/core/Chip';
import styled from "@emotion/styled"
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';




const Container = styled.div`
    right: 0;
    left: 0;
    margin-right: auto;
    margin-left: auto;
    width: 50%;

    @media only screen and (max-width: 600px) {
    width: 80%;
    }

    a:hover, span:hover {
      filter: brightness(120%);
    }
`

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'block',
    width: '75%',
    right: 0,
    left: 0,
    paddingTop: '3vh',
    marginRight: 'auto',
    marginLeft: 'auto',
    fontSize: '1rem'
  },
  heading: {
    fontFamily: 'inherit',
    fontSize: 'inherit',

  },
  details: {
    paddingTop: '2px',
  },
  description: {
    textAlign: 'left',
    fontFamily: 'inherit',
    fontWeight: '400',
    fontSize: '85%',
  },
}));

const Skill = ({skill}) => {

  if (skill.link) {
      return (
        <Chip label={skill.name}
            key={skill.name}
            size='small'
            color="primary"
            component="a"
            target="_blank"
            clickable
            href={skill.link ? skill.link : "/"}
            variant = "outlined" />
      )
  } else {
      return(
        <Chip label={skill.name}
          key={skill.name}
          size='small'
          color="primary"
          variant="outlined" />
      )
  }
}

const SkillsKey = ({type, skills}) => {
  return (
    skills.map((skill, i) => (
      <Skill skill={skill} key={i}/>
      ))
  )
}

const Skills = ({data, href}) => {
  const classes = useStyles();
  const types = Object.keys(data.skills);

  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <SContainer title={data.title} description={data.description} href={href}>
      <Container color="text.primary">
        {types.map((type, i) => (
          <SkillsKey type={type} skills={data.skills[type]} key={i} />
        ))}
      </Container>

      <div className={classes.root}>
        {data.help.map((item, i) => (
          <Accordion expanded={expanded === i} onChange={handleChange(i)} key={i}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id={i + "-header"}
            >
              <Typography className={classes.heading}>
                {item.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.details}>
              <Typography className={classes.description}>
                {item.description}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>

    </SContainer>
)
}


export default Skills
