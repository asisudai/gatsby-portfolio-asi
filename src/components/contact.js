import React from 'react';
import SContainer from "../components/container"
import styled from "@emotion/styled"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const Container = styled.div`
  width: 75%;
  margin: auto;
`

// export default class Contact extends React.Component {
const Contact = () => {

  const [value, setValue] = React.useState(0);

  function handleInputChange(event) {

    let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (event.target.name==="email") {
      if (re.test(event.target.value)) {
        setValue(false);
      } else {
        setValue(true);
      }
    }
  }


  return (
      <SContainer title='Contact'>
        <Container>
          <form method="post"
              action="https://formspree.io/asisudai@gmail.com"
              autoComplete="off">
              <TextField id="name" required="true"
                  error={ false }
                  label="Name"
                  name="Name"
                  fullWidth
                  style={{ marginTop: 8 }}
                  helpText="How you would like to be called?"
                  variant="outlined"
                  onChange={handleInputChange}
              />
              <TextField id="email" required="true"
                label="Email"
                type="email"
                name="email"
                error={ value }
                fullWidth
                style={{ marginTop: 8 }}
                helpText="What is your email?"
                variant="outlined"
                onChange={handleInputChange}
              />
              <TextField id="message"
                label="Message"
                name="message"
                rows={3}
                fullWidth
                style={{ marginTop: 8 }}
                multiline
                helpText="Any message or question?"
                variant="outlined"
                onChange={handleInputChange}
              />
              <Button variant="outlined"
                color="primary"
                style={{ marginTop: 8 }}
                fullWidth
                type="submit">
                  Send It
              </Button>
          </form>
        </Container>
      </SContainer>
  )
}

export default Contact
