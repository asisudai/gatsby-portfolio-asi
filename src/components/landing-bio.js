import React from "react"
import { StaticQuery, graphql } from "gatsby"
import SContainer from "../components/container"
import styled from "@emotion/styled"
import Avatar from '@material-ui/core/Avatar';
import Metar from "../images/avatar/pic02.jpg"
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
    width: theme.spacing(12),
    height: theme.spacing(12),
  },
}));


const LandingBio = ({ data }) => {

  const classes = useStyles();

  return (
    <Container>
      <SContainer title={data.siteMetadata.title}
        description={data.siteMetadata.description}
        subtitle={data.siteMetadata.subtitle}>

        <Avatar alt="Selfi" src={Metar} component={AContainer} className={classes.avatar}/>
      </SContainer>
    </Container>
  )
}


export default LandingBio
