import React from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import styled from 'react-emotion';

const Form = styled.form(
  tw`flex flex-col border-none`,
)

const Submit = styled.input(
  tw`rounded-full mx-10 bg-white text-teal-light hover:bg-teal-dark hover:text-white border-teal-dark border-solid`,
)



const SubmitBlue = styled.input(
  tw`rounded-full mx-10 bg-white text-blue-light hover:bg-blue-dark hover:text-white border-blue-dark border-solid`,
)

const Email = styled.input(
  tw`rounded border-transparent text-center mb-4 outline-none bg-grey-lighter focus:bg-white focus:border-blue-light focus:border-solid`
)

class EmailForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: '', returnMessage: '', color: props.color};
  
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
      if(this.state.color!="blue") {
      return (
        <Form ref={this.form} name="email-submit" onSubmit={this.handleSubmit}>
          <Email type="email" name="email" value={this.state.value} onChange={this.handleChange} placeholder="Enter your Email" autoComplete="off"/>
          <Submit type="submit" value="Submit" />
        </Form>
      );
      }
      else if(this.state.color=="blue") { 
        return (
          <Form ref={this.form} name="email-submit" onSubmit={this.handleSubmit}>
            <Email type="email" name="email" value={this.state.value} onChange={this.handleChange} placeholder="Enter your Email" autoComplete="off"/>
            <SubmitBlue type="submit" value="Submit" />
          </Form>
        );
      }
    }
  }

  export default EmailForm;
