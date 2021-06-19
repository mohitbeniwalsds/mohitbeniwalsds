// MyComponent.js
import React from 'react';
import sectionfirst from '../assets/homepage/sectionfirst.jpeg'
class Phoneform extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
    	phone: '',
  
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    alert('This page is under construction');
  }

  render() {
    return (
    	<div className="containerh-100 signupform-margin">
		    <form  onSubmit={this.handleSubmit}>
				  <div className="form-group float-center col-12">
				    <input type="text" className="form-control"  name="phone"  onChange={this.handleChange} value={this.state.phone}  placeholder="Enter Your Valid Mobile Nunber"/>
				  </div>
          <div className="d-flex justify-content-center mt-3 login_container">
				    <button type="submit" className="btn btn-primary btn-signInSubmit">Submit</button>
		      </div>
        </form>
        </div>
    );
  }
}
export default Phoneform;