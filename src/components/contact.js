import React from 'react';
import SContainer from "../components/container"
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';


const Contact = ({ data }) => {

  return (
    <SContainer title="Need Help?"
      description="Need a Consultant or Development work? let's build something.">
        <List component="nav" aria-label="main mailbox folders">
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
        </List>
    </SContainer>
  )
}

export default Contact
