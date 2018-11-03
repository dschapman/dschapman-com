import React from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import styled from 'react-emotion';

const FORM = styled.form(
  tw`border-solid border-teal rounded-lg`,
)

const SUBMIT = styled.input(
  tw`rounded-lg bg-white border-none text-teal-light hover:bg-teal-dark hover:text-white`,
)

const EMAIL = styled.input(
  tw`border-none rounded-lg`
)

class EmailForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.form = React.createRef()
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    

    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
        event.preventDefault()
       alert(this.state.value)
       addToMailchimp(this.state.value)
       .then(data => {
        // I recommend setting data to React state
        // but you can do whatever you want (including ignoring this `then()` altogether)
        console.log(data)
      })
      .catch(() => {
        // unnecessary because Mailchimp only ever
        // returns a 200 status code
        // see below for how to handle errors
      })
    }

    render() {
      return (
        <FORM ref={this.form} name="email-submit" onSubmit={this.handleSubmit}>
          <EMAIL type="email" name="email" value={this.state.value} onChange={this.handleChange} />
          <SUBMIT type="submit" value="Submit" />
        </FORM>
      );
    }
  }

  export default EmailForm;