import React from 'react';
import SContainer from "../components/container"
import styled from "@emotion/styled"
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';

const Container = styled.div`
  width: 75%;
  margin: auto;
`

const Contact = () => {

  return (
    <SContainer title="Need Help?"
      description="Need a Vancouver Consultant or Development work? let's build something.">
      <Container>
        <List component="nav" aria-label="main mailbox folders">
          <ListItem button>
            <ListItemIcon>
              <GitHubIcon />
            </ListItemIcon>
            <ListItemText primary="Github" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <LinkedInIcon />
            </ListItemIcon>
            <ListItemText primary="Linkedin" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <EmailIcon />
            </ListItemIcon>
            <ListItemText primary="Email" />
          </ListItem>
        </List>
      </Container>
    </SContainer>
  )
}

export default Contact
