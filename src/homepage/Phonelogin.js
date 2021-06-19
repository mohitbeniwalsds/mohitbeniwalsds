// MyComponent.js
import React from 'react';
import sectionfirst from '../assets/homepage/sectionfirst.jpeg'
import { Link } from "react-router-dom"
import Otp from "./Otp"
import { API } from "../backend";
import { Redirect } from "react-router-dom";
const phoneRegex = RegExp(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  if (formErrors) {
    Object.values(formErrors).forEach(val => {
      val && val.length > 0 && (valid = false);
    });
  }
  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && val.length > 0 && (valid = false);
  });

  return valid;
};
class Phonelogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: '',
      otp: '',
      show: false,
      didRedirect: false,
      formErrors: {
        phone: 0,
        otp: ""
      }

    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.performRedirect = this.performRedirect.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    const { name, value } = event.target;
    let formErrors = this.state.formErrors;
    switch (name) {
      case 'phone':
        formErrors.phone =
          phoneRegex.test(value)
            ? ""
            : "Invalid phone number";
        break;
      default:
        break;
    }
    this.setState({ [event.target.name]: event.target.value });
  }
  performRedirect = () => {
    if (this.state.didRedirect) {
      return <Redirect to="/serviceprovider/dashboard" />;
    };
  }
  handleSubmit(event) {
    if (formValid(this.state.formErrors)) {
      let user = { mobile_number: this.state.phone, otp: this.state.otp };
      return fetch(`${API}/user/validateotp`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      })
        .then(response => {
          if (response.status == 200)
            this.setState({
              didRedirect: true
            })
          else
            alert("Login Failed!!!");
        })
        .catch(err => console.log(err));
    }
    else {
      alert('No Field can be empty ')
    }
  }
  showModal = () => {
    this.setState({ show: true });
    this.render();
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    const { formErrors } = this.state;
    let button;
    // if(this.state.show)
    // {
    button = <div className="containerh-100 signupform-margin">
      <form >
        <div className="form-group float-center col-12">
          <input type="text" className={formErrors.phone.length > 0 ? "error" : ""} required name="phone" onChange={this.handleChange} value={this.state.phone} placeholder="Enter Your Valid Mobile Nunber" />
          {formErrors.phone.length == 0 ? <button type="button" className="btn btn-primary btn-sendotp mt-3" onClick={this.showModal}>Send OTP</button> : ""}
          {formErrors.phone.length > 0 && (
            <span className="errorMessage">{formErrors.phone}</span>
          )}
          {this.state.show ? <input type="text" className="form-control" name="otp" required onChange={this.handleChange} value={this.state.otp} placeholder="Enter OTP" /> : ""}
        </div>
        <div className="d-flex justify-content-center mt-3 login_container">
          {this.state.show ? <button type="button" className="btn btn-primary btn-signInSubmit" onClick={this.handleSubmit}>Submit</button> : ""}
        </div>
      </form>
      {this.performRedirect()}
    </div>
    // }
    // else{
    //   button = <div className="containerh-100 signupform-margin">
    //   <form >
    //     <div className="form-group float-center col-12">
    //       <input type="text" className="form-control"  name="otp"  onChange={this.handleChange} value={this.state.otp}  placeholder="Enter OTP"/>
    //     </div>
    //     <div className="d-flex justify-content-center mt-3 login_container">
    //       <button type="submit" className="btn btn-primary btn-signInSubmit" onClick={this.handleSubmit}>Submit</button>
    //     </div>
    //   </form>
    //   </div>
    // }
    return (
      button
    );
  }
}
export default Phonelogin;