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

// TODO: move this to a data module.
const skillslist = [
  { 'name': 'Python', 'link': 'http://www.python.org' },
  { 'name': 'Shell', 'link': 'https://ohmyz.sh/' },
  { 'name': 'MySQL', 'link': 'https://www.mysql.com/' },
  { 'name': 'MongoDB', 'link': 'https://www.mongodb.com/' },
  { 'name': 'Docker', 'link': 'http://www.docker.com' },
  { 'name': 'ESXi', 'link': 'https://www.vmware.com/ca/products/esxi-and-esx.html' },
  { 'name': 'Grafana', 'link': 'https://grafana.com/' },
  { 'name': 'Promethues', 'link': 'https://prometheus.io/' },
  { 'name': 'Promethues', 'link': 'https://prometheus.io/' },
  { 'name': 'Shotgun', 'link': 'https://www.shotgunsoftware.com/' },
  { 'name': 'Rest API', },
  { 'name': 'Javascript', },
  { 'name': 'HTML', },
  { 'name': 'CSS', },
  { 'name': 'React', 'link': 'https://reactjs.org/' },
  { 'name': 'Flask', 'link': 'https://flask.palletsprojects.com/' },
  { 'name': 'Django', 'link': 'https://www.djangoproject.com/' },
  { 'name': 'PyQT', 'link': 'https://doc.bccnsoft.com/docs/PyQt5/' },
  { 'name': 'Maya', 'link': 'https://www.autodesk.com/products/maya/overview' },
  { 'name': 'Nuke', 'link': 'https://www.foundry.com/products/nuke' },
  { 'name': 'Redshift', 'link': 'https://www.redshift3d.com/' },
  { 'name': 'Renderman', 'link': 'https://renderman.pixar.com/' },
  { 'name': 'Vray', 'link': 'https://www.chaosgroup.com/' },
  { 'name': 'Deadline', 'link': 'https://www.awsthinkbox.com/deadline' },
  { 'name': 'Qube', 'link': 'https://www.pipelinefx.com/  ' },
  { 'name': 'Pipeline' },
  { 'name': 'Rigging' },
  { 'name': 'Web-Dev' },
  { 'name': 'Sys Admin' },
  { 'name': 'Supervisor' },
];


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

const Skills = ({data}) => {

      return (
        <SContainer title="Skills" description="Things I do">
          <Container color="text.primary">
            {skillslist.map((skill) => (
              <Skill skill={skill} />
              ))}
          </Container>
        </SContainer>
    )
}


export default Skills
