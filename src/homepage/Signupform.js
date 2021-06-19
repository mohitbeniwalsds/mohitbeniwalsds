// MyComponent.js
import React from 'react';
import { API } from "../backend";
import sectionfirst from '../assets/homepage/sectionfirst.jpeg'
class Signupform extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
    	first_name: '',
    	last_name:'',
    	email:'',
    	phone:'',
    	address:'',
    	postal_code:'',
    	password:'',
    	confirm_pass:''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
	event.preventDefault();
	let user ={
		first_name: this.state.first_name,
    	last_name:this.state.last_name,
    	email:this.state.email,
    	phone:this.state.phone,
    	address:this.state.address,
    	postal_code:this.state.postal_code,
		password:this.state.password,
		confirm_pass:this.state.confirm_pass
	  };
		console.log(`${API}/user/signup`)
	return fetch(`${API}/user/signup`, {
		method: "POST",
		headers: {
		  Accept: "application/json",
		  "Content-Type": "application/json"
		},
		body: JSON.stringify(user)
	  })
		.then(response => {
			if(response.status == 200)
			alert("Signup successfull!!! Please Login to continue");
			else
			alert("Signup Failed!!!");
		
		})
		.catch(err => console.log(err));
  
  }

  render() {
    return (
    	<div className="containerh-100 signupform-margin">
		    <form  onSubmit={this.handleSubmit}>
				  <div className="form-group float-center col-12">
				    <input type="text" className="form-control"  name="first_name"  onChange={this.handleChange} value={this.state.value}  placeholder="First Name"/>
				  </div>
				   <div className="form-group col-12">
				    <input type="text" className="form-control"  name="last_name"  onChange={this.handleChange}   placeholder="Last Name" />
				  </div>
				   <div className="form-group col-12">
				    <input type="email" className="form-control" name="email"   onChange={this.handleChange}  placeholder="Email Address" />
				  </div>
				   <div className="form-group col-12">
				    <input type="text" className="form-control"  name="phone"  onChange={this.handleChange}   placeholder="Phone Number" /> 
				  </div>
				   <div className="form-group col-12">
				    <input type="text" className="form-control"  name="address"  onChange={this.handleChange}   placeholder="Address" />
				  </div>
				  <div className="form-group col-12">
				    <input type="text" className="form-control" name="postal_code"  onChange={this.handleChange}   placeholder="Postal Code" />
				  </div>
				  <div className="form-group col-12">
				    <input type="password" className="form-control"  name="password"  onChange={this.handleChange}   placeholder="Password" />
				  </div>
				  <div className="form-group col-12">
				    <input type="password" className="form-control" name="confirm_pass"  placeholder="Confirm Password"/>
				  </div>
          <div className="d-flex justify-content-center mt-3 login_container">
				    <button type="submit" className="btn btn-primary btn-signInSubmit">Submit</button>
		      </div>
        </form>
        </div>
    );
  }
}
export default Signupform;