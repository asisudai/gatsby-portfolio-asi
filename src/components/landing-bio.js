import React from "react"
import SContainer from "../components/container"
import styled from "@emotion/styled"
import Avatar from '@material-ui/core/Avatar';
import Metar from "../images/avatar/pic06.jpg"
import { makeStyles } from '@material-ui/core/styles';

const Container = styled.div`
  padding-top: 30vh;
  display: 'flex',
`
const AContainer = styled.div`
  text-align: center;
  color:red;
  display: block;
  margin-left: auto;
  margin-right: auto;
  }
`
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
}));


const LandingBio = ({ data }) => {

  const classes = useStyles();

  return (
    <Container>
      <SContainer title={data.siteMetadata.title}
        description={data.siteMetadata.description}
        subtitle={data.siteMetadata.subtitle}>
        <Avatar alt="Selfi" src={Metar} component={AContainer}
          className={classes.avatar} variant='circle'/>
      </SContainer>
    </Container>
  )
}


export default LandingBio
