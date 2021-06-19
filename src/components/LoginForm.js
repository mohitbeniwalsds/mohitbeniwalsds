// MyComponent.js
import React from 'react';
import Image from 'react-bootstrap/Image'
import { FaUser, FaUnlock } from 'react-icons/fa';
import Container from 'react-bootstrap/Container'
import Signup from './Signup'
import Login from './Login'
import { API } from "../backend";
import { Redirect } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const emailRegex = RegExp(
  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
);
const formValid = ({ formErrors, ...rest }) => {
  let valid = true;
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
}
class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      show: true,
      redirect: false,
      redirectTo: "",
      remember_me: '',
      formErrors: {
        username: "",
        password: "",
        auth: ''
      }
    };
  }
  redirect() {
    if (this.state.redirect)
      return <Redirect to={this.state.redirectTo} />
  }
  handleSubmit = e => {
    e.preventDefault();
    let formErrors = this.state.formErrors;
    if (formValid(this.state.formErrors)) {
      let user = { email: this.state.username, password: this.state.password };
      return fetch(`${API}/user/login`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      })
        .then(response => response.json().then(data => {
          if (response.status == 200) {
            toast.success("Login Successful")
            this.setState({
              redirect: true
            })
            if (data.user.isAdmin) {
              sessionStorage.setItem("adminData", JSON.stringify(data.user))
              this.setState({
                redirectTo: {
                  pathname: "/newAdmin",
                  state: { id: data.user }
                }
              })
            }
            else if (!data.user.isUser && data.user.status) {
              sessionStorage.setItem("providerData", JSON.stringify(data.user))
            sessionStorage.setItem("providerDatatoken", JSON.stringify(data.token))

              this.setState({
                redirectTo: {
                  pathname: "/serviceprovider/dashboard",
                  state: { id: data.user }
                }
              })
            }
            else if (!data.user.isUser && !data.user.status) {
              sessionStorage.setItem("providerData", JSON.stringify(data.user))
              sessionStorage.setItem("providerDatatoken", JSON.stringify(data.token))
              this.setState({
                redirectTo: "/waiting_for_response"
              })
            }
            else {
              sessionStorage.setItem("token", JSON.stringify(data.token))
              setTimeout(function () { window.location.reload(false); }, 2000);

            }
          }
          else {
            formErrors.auth = "Invalid username or password";
            this.setState({ formErrors });
          }
        })
        )
      // .catch(err => toast.error("Ooops!! Something went wrong."));
    } else {
      toast.error("Invalid Credentials");

    }
  };

  handleChange = e => {
    const { name, value } = e.target;
    let formErrors = this.state.formErrors;

    switch (name) {
      case 'username':

        formErrors.username =
          emailRegex.test(value)
            ? ""
            : "invalid username";
        //   value.length < 3 && value.length > 0 
        //     ? 'Minimum 3 characters required' 
        //     : "";
        break;
      case 'password':
        formErrors.password =
          value.length < 6
            ? "Minimum 6 characters required"
            : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  }

  handleClose(event) {
    // swal("This page is under construction");
    // return false;
    alert('This page is under construction');
  }
  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  render() {
    const { formErrors } = this.state;

    return (

      <div className="wrapper">
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
        <div className="form-wrapper">
          <h2>Login</h2>
          <form onSubmit={this.handleSubmit}>
            {formErrors.auth.length > 0 && (
              <span className="errorMessage">{formErrors.auth}</span>
            )}
            <div className="username">
              <input
                type="text"
                name="username"
                className={formErrors.username.length > 0 ? "error" : "input_user"}
                noValidate
                onChange={this.handleChange}
                placeholder="Username"
                required
              />
              {formErrors.username.length > 0 && (
                <span className="errorMessage">{formErrors.username}</span>
              )}
            </div>
            <div className="password">
              <input
                type="password"
                name="password"
                className={formErrors.password.length > 0 ? "error" : "input_pass"}
                noValidate
                onChange={this.handleChange}
                placeholder="Password"
                required
              />
              {formErrors.password.length > 0 && (
                <span className="errorMessage">{formErrors.password}</span>
              )}
            </div>
            <div className="checkbox ml-4">
              <input
                type="checkbox"
                onChange={this.handleChange}
                name="remember_me"
                id="customControlInline"
              />
              <label for="customControlInline">Remember me</label>
            </div>
            <div className="login_container">
              <button type="submit" name="button" id="formclick" className="btn login_btn">Login</button>
            </div>
          </form>
          <div className="forgetPassword" style={{ display: "none" }}>
            <a href="#">Forgot your password?</a>
          </div>
        </div>
        {this.redirect()}
      </div>

    );
  }
}
export default LoginForm;