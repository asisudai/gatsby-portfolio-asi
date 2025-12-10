import React from 'react';
import styled from "@emotion/styled"
import SContainer from "../components/container"
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';


const StyledList = styled(List)`
  display: flex;
`

const CenterDiv = styled.div`
  text-align: center;
  width: 80%;
  margin: auto;
`


const Contact = ({ data }) => {

  return (
    <SContainer title="Need Help?"
      description="Are you looking for a Pipeline Developer or a consultant?"
      subdescription="My expertise lies in establishing new animation studios from the ground up - establishing production technology (software and hardware) and hiring talented crews"
    >
      <CenterDiv>
        <StyledList component="nav" aria-label="main mailbox folders">
            <ListItem button component="a" href="/contact">
              <ListItemIcon>
                <EmailIcon />
              </ListItemIcon>
              <ListItemText primary="Email" />
            </ListItem>
            <ListItem button component="a" href={data.siteMetadata.github}>
              <ListItemIcon>
                <GitHubIcon />
              </ListItemIcon>
              <ListItemText primary="Github" />
            </ListItem>
            <ListItem button component="a" href={data.siteMetadata.linkedin}>
              <ListItemIcon>
                <LinkedInIcon />
              </ListItemIcon>
              <ListItemText primary="Linkedin" />
            </ListItem>
        </StyledList>
      </CenterDiv>
    </SContainer>
  )
}

export default Contact
