import React from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import styled from 'react-emotion';

const FORM = styled.form(
  tw`flex flex-col border-none`,
)

const SUBMIT = styled.input(
  tw`rounded-full mx-10 bg-white border-none text-teal-light hover:bg-teal-darker hover:text-white`,
)

const EMAIL = styled.input(
  tw`rounded border-transparent text-center mb-4 outline-none bg-grey-lighter focus:bg-white focus:border-blue-light focus:border-solid`
)

class EmailForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: '', returnMessage: ''};
  
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
        this.state.returnMessage = data
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
          <EMAIL type="email" name="email" value={this.state.value} onChange={this.handleChange} placeholder="Enter your Email"/>
          <SUBMIT type="submit" value="Submit" />
        </FORM>
      );
    }
  }

  export default EmailForm;