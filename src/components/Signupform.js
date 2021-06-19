// MyComponent.js
import React from 'react';
import sectionfirst from '../assets/homepage/sectionfirst.jpeg'
import  Signup from './Signup'
import { API } from "../backend";
import "../Style.css";
import { Redirect } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const emailRegex = RegExp(
  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
);
const mobile_numberRegex = RegExp(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/);
const notify = () => toast("Wow so easy !");
const formValid = ({ formErrors, ...rest }) => {
  let valid = true;
  
  // validate form errors being empty
  if(formErrors){
  Object.values(formErrors).forEach(val => {
    val &&  val.length > 0 && (valid = false);
  });
}
  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && val.length>0 && (valid = false);
  });

  return valid;
};

class Signupform extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      mobile_number: '',
      address: '',
      postal_code: '',
      password: '',
      confirm_pass: '',
      formErrors: {
        first_name: "",
        last_name: "",
        email: "",
        mobile_number: "",
        address: "",
        postal_code: "",
        password: "",
        confirm_pass: ""
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    let {formErrors,...dataToSend} = this.state
    if (formValid(this.state)) {
      return fetch(`${API}/user/signup`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(dataToSend)
        })
        .then(response => response.json() .then(data=> {
          if(response.status == 200){
            setTimeout(function(){  document.elementFromPoint(0, 0).click(); }, 2000)
        
          toast.success("Sign up suceessfull. Please Login");

          }
          else
          toast.error(data.msg);
        
        })
        )
        .catch(err => console.log(err));
    } else {
      
    }
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = this.state.formErrors;

    switch (name) {
      case "first_name":
        formErrors.first_name =
          value.length < 3 ? "Minimum 3 characters required" : "";
        break;
      case "last_name":
        formErrors.last_name =
          value.length < 3 ? "Minimum 3 characters required" : "";
        break;
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "mobile_number":
        formErrors.mobile_number =
        mobile_numberRegex.test(value)? "": "Invalid mobile_number number";
        break;
      case "address":       
       formErrors.address =
          value.length < 3 ? "Minimum 3 characters required" : "";
        break;
      case "postal_code":
        formErrors.postal_code =
          value.length < 3 ? "Minimum 3 characters required" : "";
        break;
      case "password":
        formErrors.password =
          value.length < 6 ? "Minimum 6 characters required" : "";
        formErrors.confirm_pass =
		      this.state.confirm_pass != value ? "Password do not match" : "";
        break;
        case "confirm_pass":
        formErrors.confirm_pass =
          value != this.state.password ? "Password do not match" : "";
        break;
        
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  render() {
    const { formErrors } = this.state;

    return (
      <div className="signupform-margin">
        <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
        />
        <div className="signUp-form-wrapper">
          <h3 className="titleSignUp">Sign up</h3>
          <form  onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="col-sm-6">
                <div className="form-group first_name">
                  <label>First name</label>
                  <input 
                    type="text" 
                    className={formErrors.first_name.length > 0 ? "error" : ""}  
                    name="first_name"  
                    onChange={this.handleChange}
                    required
                  />
                  {formErrors.first_name.length> 0 && (
                    <span className="errorMessage">{formErrors.first_name}</span>
                  )}
                </div>
              </div>
              <div className=" col-sm-6">
                <div className="form-group last_name">
                  <label>Last name</label>
                  <input 
                    type="text" 
                    className={formErrors.last_name.length > 0 ? "error" : ""}  
                    name="last_name"  
                    onChange={this.handleChange}
                    required 
                  />
                  {formErrors.last_name.length> 0 && (
                    <span className="errorMessage">{formErrors.last_name}</span>
                  )}
                </div>
              </div>
            </div>
            <div className="email">
              <label>Email Address</label>
              <input 
                type="email" 
                className={formErrors.email.length > 0 ? "error" : ""} 
                name="email"   
                onChange={this.handleChange}  
                required 
              />
              {formErrors.email.length> 0 && (
                <span className="errorMessage">{formErrors.email}</span>
              )}
            </div>
            <div className="row">
              <div className="col-sm-6">
                <div className="phone">
                  <label>Mobile Number</label>
                  <input 
                    type="text" 
                    className={formErrors.mobile_number.length > 0 ? "error" : ""}  
                    name="mobile_number"  
                    onChange={this.handleChange} 
                    required 
                  />
                  {formErrors.mobile_number.length> 0 && (
                    <span className="errorMessage">{formErrors.mobile_number}</span>
                  )} 
                </div>
              </div>
              <div className="col-sm-6">
                <div className="postal_code">
                  <label>Postal Code</label>
                  <input 
                    type="text" 
                    className={formErrors.postal_code.length > 0 ? "error" : ""} 
                    name="postal_code"  
                    onChange={this.handleChange}
                    required 
                  />
                  {formErrors.postal_code.length> 0 && (
                    <span className="errorMessage">{formErrors.postal_code}</span>
                  )}
                </div>
              </div>
            </div>
            <div className="address">
              <label>Address</label>
              <textarea 
                className={formErrors.address.length > 0 ? "error" : ""}  
                name="address"  
                onChange={this.handleChange}  
                id="address" 
                rows="4" cols="40"
                required 
              />
              {formErrors.address.length> 0 && (
                <span className="errorMessage">{formErrors.address}</span>
              )}
            </div>
            <div className="row">
              <div className="col-sm-6">
                <div className="password">
                  <label>Password</label>
                  <input 
                    type="password" 
                    className={formErrors.password.length > 0 ? "error" : ""}  
                    name="password"  
                    onChange={this.handleChange}
                    required
                  />
                  {formErrors.password.length> 0 && (
                    <span className="errorMessage">{formErrors.password}</span>
                  )}
                </div>
              </div>
              <div className="col-sm-6">
                <div className="confirm_pass">
                  <label>Confirm Password</label>
                  <input 
                    type="password" 
                    className={formErrors.confirm_pass.length > 0 ? "error" : ""} 
                    name="confirm_pass"  
                    onChange={this.handleChange}  
                    required
                  />
                  {formErrors.confirm_pass.length> 0 && (
                    <span className="errorMessage">{formErrors.confirm_pass}</span>
                  )}
                </div>
              </div>
            </div>
            <div className="submitForm">
              <button type="submit" className="btn signUpBtn">Submit</button>
            </div>
        </form>
        </div>
      </div>
    );
  }
}
export default Signupform;