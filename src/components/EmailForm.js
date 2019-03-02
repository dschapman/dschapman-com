import React from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import styled from 'react-emotion';
import {mainTheme} from '../styles/styles'

const Form = styled.form(
  `
  display: flex;
  flex-direction: column;
  border-style: none;
  `
)

const Submit = styled.input(
  `
  
  border-radius: 9999px;
  margin: 0 2.5rem 0;
  background: ${mainTheme.background};
  &:hover{
    color: ${mainTheme.background};
    background:${mainTheme.secondaryDark};
  };
  border-color:${mainTheme.secondaryDark};
  border-style:solid;
  color: ${props => (props.color || mainTheme.secondaryLight)};
  `
  
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
      

        return (
          <Form ref={this.form} name="email-submit" onSubmit={this.handleSubmit}>
            <Email type="email" name="email" value={this.state.value} onChange={this.handleChange} placeholder="Enter your Email" autoComplete="off"/>
            <Submit type="submit" value="Submit" color={this.state.color} />
          </Form>
        );
      }
    }

  export default EmailForm;
