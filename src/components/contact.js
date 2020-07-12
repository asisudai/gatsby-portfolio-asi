import React from "react"
import SContainer from "../components/container"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


export default class Contact extends React.Component {
    state = {
        name: "",
        email: "",
        message: "",
    }

    handleInputChange = event => {
        const target = event.target
        const value = target.value
        const name = target.name

        this.setState({
            [name]: value,
        })

        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (name==="email") {
            if (re.test(value)) {
                // valid email
                // target.setState({ 'error': false })
            }
            else {
                // invalid email, maybe show an error to the user.
                console.log(name, value, 'no good')
                // target.setState({'error':'true'})
                // this.setState({'error': event.target.true})

            }
        }
    }

    render() {
        return (
            <SContainer title='Contact'>
                <form method="post"
                    action="https://formspree.io/asisudai@gmail.com"
                    autoComplete="off">
                    <TextField id="message"
                        label="Message"
                        name="message"
                        rows={3}
                        fullWidth
                        multiline
                        helpText="Any message or question?"
                        variant="outlined"
                        onChange={this.handleInputChange}
                        />
                    <TextField id="name" required="true"
                        label="Name"
                        name="name"
                        helpText="How you would like to be called?"
                        variant="outlined"
                        onChange={this.handleInputChange}
                        />
                    <TextField id="email" required="true"
                        label="Email"
                        type="email"
                        name="email"
                        helpText="What is your email?"
                        variant="outlined"
                        onChange={this.handleInputChange}
                        />
                    <Button type="submit">Send It</Button>
                </form>
            </SContainer>
        )
    }
}
