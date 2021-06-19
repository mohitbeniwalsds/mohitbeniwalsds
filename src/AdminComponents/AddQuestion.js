// MyComponent.js
import React from 'react';
import sectionfirst from '../assets/homepage/sectionfirst.jpeg'
import { API } from "../backend";
import "./Admin.css";
import { Redirect } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Ques from "./Questionnair";
const emailRegex = RegExp(
  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
);
const mobile_numberRegex = RegExp(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/);
const notify = () => toast("Wow so easy !");
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

class Questionform extends React.Component {
  constructor(props) {
    super(props);
    var isEdit = false
    let editques = JSON.parse(localStorage.getItem('editQues')) ? JSON.parse(localStorage.getItem('editQues')).question : ""
    if (editques) {
      isEdit = true
    }
    else {
      editques = ''
    }
    this.state = {
      question: editques,
      isEdit: isEdit,
      formErrors: {
        question: ''
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    let currecat = localStorage.getItem('cat_ques');
    let curresubcat = localStorage.getItem('subcat_ques');
    let { formErrors, ...dataToSend } = this.state
    dataToSend['category'] = currecat;
    dataToSend['subcategory'] = curresubcat;
    if (this.state.isEdit)
      dataToSend['ques_id'] = JSON.parse(localStorage.getItem('editQues'))._id
    if (formValid(this.state)) {
      fetch(`${API}/admin/addQuestion`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(dataToSend)
      })
        .then(response => response.json().then(data => {
          if (response.status == 200) {
            setTimeout(function () { document.elementFromPoint(0, 0).click(); }, 2000)
            if (this.state.isEdit) alert("Question updated successfully");
            else alert("Question added successfully");
            localStorage.setItem('getQues', true)
            localStorage.removeItem('editQues')
            Ques.getcurrentlyClicked1();
          }
          else {
            toast.error(data.msg);
          }
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
      case "question":
        formErrors.first_name =
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
        <div className="question-form-wrapper">
          <h3 className="titleQuestion">Add Question</h3>
          <form onSubmit={this.handleSubmit}>
            <div className="col-md-12">
              <div className="row">
                <div className="form-group question-area">
                  <textarea
                    className={formErrors.question.length > 0 ? "error" : ""}
                    rows="3"
                    cols="40"
                    id="textareaForQuestion"
                    name="question"
                    onChange={this.handleChange}
                    required
                    value={this.state.question} />
                  {formErrors.question.length > 0 && (
                    <span className="errorMessage">{formErrors.question}</span>
                  )}
                </div>
              </div>
            </div>
            <div className="submitQuestionForm">
              <button type="submit" className="btn btn-lg btn btn-primary submitQuestionBtn">Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default Questionform;