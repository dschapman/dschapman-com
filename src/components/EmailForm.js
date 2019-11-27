import React from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import styled from '@emotion/styled';
import {mainTheme} from './styles'

const Form = styled('form')(
  `
  display: flex;
  flex-direction: column;
  border-style: none;
  max-width: 18rem;
  margin-bottom: 0.5rem;
  `
)

const Submit = styled('input')(
  `
  
  border-radius: 9999px;
  margin: 1rem 2rem 0;
  background: ${mainTheme.background};
  &:hover{
    color: ${mainTheme.background};
    background:${mainTheme.secondaryLight};
  };
  border-color:${mainTheme.secondaryLight};
  border-style:solid;
  border-width:2px;
  color: ${props => (props.color || mainTheme.secondaryLight)};
  font-size:115%;
  `
  
  
)

const Email = styled('input')(
  //tw`rounded border-transparent text-center mb-4 outline-none bg-grey-lighter focus:bg-white focus:border-blue-light focus:border-solid`
  `
  border-radius: .25rem;
  border-color: transparent;
  text-align: center;
  margin-bottom: .5 rem;
  outline: 0;
  background: ${mainTheme.accent};
  &:focus{
    background: ${mainTheme.background};
    border-color: ${mainTheme.primaryLight};
    border-style: solid;
    border-width: 2px;
  };
  font-size: 115%;
  `
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
            <Email type="email" name="email" value={this.state.value} onChange={this.handleChange} placeholder="Join the Email List" autoComplete="off"/>
            <Submit type="submit" value="Submit" color={this.state.color} />
          </Form>
        );
      }
    }

  export default EmailForm;
