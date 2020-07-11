import React from "react"
import SContainer from "../components/container"
import styled from "@emotion/styled"
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import WorkIcon from '@material-ui/icons/Work';

const Container = styled.div`
  padding-top: 10vh;
  padding-bottom: 10vh;
  display: 'flex',
`

const StyledListItem = withStyles({
  root: {
    width: '100%',
    maxWidth: 360,
  },
  dense: {
    'padding-top': '0px',
    'padding-bottom': '0px',
    'margin-bottom': '3px',
  },
})(ListItem);



const Experince = ({ data, href }) => {

  function diff_years() {
    var dt1 = new Date();
    var dt2 = new Date(2003, 10, 11);
    var diff = (dt2.getTime() - dt1.getTime()) / 1000;
    diff /= (60 * 60 * 24);
    return Math.abs(Math.round(diff / 365.25));
  }

  return (
    <Container color="text.primary">
      <SContainer title={data.title}
                  description={diff_years() + data.description}
                  href={href}>
        <List dense={true}>
          {data.jobs.map((node, i) => (
            <StyledListItem dense={true} key={i}>
              <ListItemAvatar>
                <Avatar>
                  <WorkIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={node.primary} secondary={node.secondary} key={i} />
            </StyledListItem>
          ))}
        </List>
      </SContainer>
    </Container>
  )
}

export default Experince
