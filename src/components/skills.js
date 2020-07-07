import React from "react"
import SContainer from "../components/container"
import Chip from '@material-ui/core/Chip';
import styled from "@emotion/styled"

const Container = styled.div`
    right: 0;
    left: 0;
    margin-right: auto;
    margin-left: auto;
    width: 50%;
`

const Skill = ({skill}) => {

  if (skill.link) {
      return (
        <Chip label={skill.name}
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
          size='small'
          color="primary"
          variant="outlined" />
      )
  }
}

const SkillsKey = ({key, skills}) => {
  console.log(key);
  console.log(skills);
  return (
    skills.map((skill) => (
      <Skill skill={skill}/>
      ))
  )
}

const Skills = ({data}) => {

  const keys = Object.keys(data.skills);

  return (
    <SContainer title="Skills" description="Things I do">
      <Container color="text.primary">
        {keys.map((key) => (
          <SkillsKey key={key} skills={data.skills[key]} />
        ))}
      </Container>
    </SContainer>
)
}


export default Skills
