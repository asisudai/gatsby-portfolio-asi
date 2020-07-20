import React from "react"
import SContainer from "../components/container"
import styled from "@emotion/styled"
import Avatar from '@material-ui/core/Avatar';
import Selfish from "../images/avatar/selfish_400.jpg"
import { makeStyles } from '@material-ui/core/styles';

const AContainer = styled.div`
  text-align: center;
  color:red;
  display: block;
  margin-left: auto;
  margin-right: auto;
`

const Bio = styled.div`
  padding-top: 10px;
  margin: auto;
  width:75%;
  `
const MarkdownContent = styled.div`
  text-align: center;
  font-size: 90%;
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


const LandingBio = ({ data, href }) => {


  const classes = useStyles();

  return (
    <SContainer title={data.siteMetadata.title}
      description={data.siteMetadata.description}
      subtitle={data.siteMetadata.subtitle}
      href={href}>
      <Bio>
        {/* <MarkdownContent dangerouslySetInnerHTML={{ __html: bio.node.html }} /> */}
        <MarkdownContent>
          <p>
            Dyslexia doesn't mean you're dumb! It only means you need to find your way of learning, what better than learn what you love. So I did! I'm a self-taught computer engineer with a passion for visual arts and storytelling. I love it when science and art come together.
          </p>
        </MarkdownContent>
      </Bio>
      <Avatar alt="Selfi" src={Selfish} component={AContainer}
        className={classes.avatar} variant='circle'/>
    </SContainer>
  )
}


export default LandingBio
