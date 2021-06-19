import React from 'react';
import AdminDashboard from './AdminDashboard.css';
import { API } from "../backend";
import { ToastContainer, toast } from "react-toastify";
import { Redirect } from "react-router-dom";
const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};

class AdminLogin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: null,
      password: null,
      formErrors: {
        username: "",
        password: ""
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state)) {
      let dataToSend = {
        email: this.state.username,
        password: this.state.password
      }
      fetch(`${API}/admin/login`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(dataToSend)
      })
        .then((response) =>
          response.json().then((data) => {
            if (response.status == 200) {
              sessionStorage.setItem('admintoken', data.token)
              console.log(data)
              redirect: window.location.replace("/newAdmin")
            } else {
              toast.error("Ooops!! Failed to fetch data.");
            }
          })
        )
      // console.log(`
      //     --SUBMITTING--
      //     User: ${this.state.username}
      //     Password: ${this.state.password}
      //   `);
    } else {
      // console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };


  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "username":
        formErrors.username = emailRegex.test(value)
          ? ""
          : "invalid username";
        break;
      case "password":
        formErrors.password =
          value.length < 6 ? "minimum 6 characaters required" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  render() {
    const { formErrors } = this.state;
    return (
      <div className="AdminLoginWrapper">
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
        <div className="AdminLogin-form-wrapper">
          <h1 className="heading-adminForm">Admin Login</h1>
          <form className="AdminLoginForm" onSubmit={this.handleSubmit} noValidate>
            <div className="username">
              <label htmlFor="username">Username</label>
              <input
                className={formErrors.username.length > 0 ? "error" : null}
                placeholder="Username"
                type="email"
                name="username"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.username.length > 0 && (
                <span className="errorMessage">{formErrors.username}</span>
              )}
            </div>
            <div className="password">
              <label htmlFor="password">Password</label>
              <input
                className={formErrors.password.length > 0 ? "error" : null}
                placeholder="Password"
                type="password"
                name="password"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.password.length > 0 && (
                <span className="errorMessage">{formErrors.password}</span>
              )}
            </div>
            <div className="AdminLoginSubmit">
              <button type="submit">Login</button>
              <small>Forget password?</small>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default AdminLogin;