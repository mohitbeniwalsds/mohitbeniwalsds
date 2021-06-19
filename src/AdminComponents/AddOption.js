// MyComponent.js
import React from 'react';
import sectionfirst from '../assets/homepage/sectionfirst.jpeg'
import { API } from "../backend";
import "./Admin.css";
import { Redirect } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import  Ques  from "./Questionnair";
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

class Optionform extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      option: '',
      formErrors: {
      option: ''
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    let currques = localStorage.getItem('currQues');
    let {formErrors,...dataToSend} = this.state
    dataToSend['ques_id'] = currques;
    if (formValid(this.state)) {
      return fetch(`${API}/admin/addOption`, {
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
          alert("Option added successfully");
          localStorage.setItem('getQues',true)
          Ques.getcurrentlyClicked1();    }
          else{
            debugger
          toast.error(data.msg);
          }
        debugger
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
      case "option":
        formErrors.option =
          value.length < 1 ? "Question is required" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value });
  };

  render() {
    const { formErrors } = this.state;

    return (
      <div className="addQuestionForm">
        <div className="question-form-wrapper">
          <h3 className="titleQuestion">Add Option</h3>
          <form  onSubmit={this.handleSubmit}>
            <div className="col-md-12">
              <div className="row">
                <div className="form-group question-area">
                  <textarea 
                      className={formErrors.option.length > 0 ? "error" : ""}
                      rows="3"  
                      cols="40"
                      id="textareaForQuestion"
                      name="option"  
                      onChange={this.handleChange}
                      required
                      placeholder="Option" />
                  {formErrors.option.length> 0 && (
                    <span className="errorMessage">{formErrors.option}</span>
                  )}
                </div>
              </div>
            </div>
            <div className="submitQuestionForm">
              <button type="submit" className="btn  btn-lg btn btn-primary submitQuestionBtn">Submit</button>
            </div>
        </form>
        </div>
      </div>
    );
  }
}
export default Optionform;