import React from 'react'

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
    }

    render() {
      return (
        <form ref={this.form} name="email-submit" onSubmit={this.handleSubmit}>
          <label>
            Email:
            <input type="email" name="email" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

  export default EmailForm;