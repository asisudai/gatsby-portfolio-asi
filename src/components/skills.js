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

const Skills = ({data}) => {

  const types = Object.keys(data.skills);

  return (
    <SContainer title="Skills" description="Things I do">
      <Container color="text.primary">
        {types.map((type, i) => (
          <SkillsKey type={type} skills={data.skills[type]} key={i} />
        ))}
      </Container>
    </SContainer>
)
}


export default Skills
