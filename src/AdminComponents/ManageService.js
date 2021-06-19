import React, { useState, useEffect } from "react";
import { white } from "material-ui/styles/colors";
import { Modal, Container, Row } from "react-bootstrap";
import editIcon from "../assets/Icons/edit.png";
import deleteicon from "../assets/Icons/delete.png";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { API } from "../backend";
import { ToastContainer, toast } from "react-toastify";
import "./Admin.css";

export default function ManageService() {
  const [show, setShow] = useState(false);
  const [showPopup, setPopup] = useState(false);
  const [allCat, setallCat] = useState({});
  const handleCloseSignupForm = () => setPopup(false);
  const showSignForm = () => setPopup(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [editCatId, seteditCatId] = useState();
  const [count, setCount] = useState(false);
  const [current, setCurrent] = useState();
  const [isEdit, setisEdit] = useState(false);
  const getCategory = function () {
    if (!count) {
      setCount(true);
      fetch(`${API}/admin/getAllCategory`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((response) =>
          response.json().then((data) => {
            if (response.status == 200) {
              setallCat(data);
              // localStorage.setItem({
              //   data:data
              // })
            } else {
              toast.error("Ooops!! Failed to fetch data.");
            }
          })
        )
        .catch((err) => toast.error("Ooops!! Something went wrong."));
    }
  };


  const deletefunct = (e) => {
    var data = JSON.stringify({
      "catId": e
    });
    console.log(data)

    fetch(`${API}/admin/deletecategory`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: data
    })
      .then((response) =>
        response.json().then((data) => {
          if (response.status == 200) {
            setCount(false)
            getCategory()
            toast.success("Successfuly Delete")
          } else {
            toast.error("Ooops!! Failed to fetch data.");
          }
        })
      )
      .catch((err) => toast.error("Ooops!! Something went wrong."));
  }

  const providerTable = (x, index) => {
    return (
      <>
        <div className="col-md-6 inline box-manage-service">
          <Link to={{ pathname: "/newAdmin/mangeServiceType", query: x }}>{x.category}</Link>
        </div>

        <div className="inline">
          <Button onClick={() => {
            setPopup(true);
            setShow(false);
            setisEdit(true);
            setCurrent(x.category);
            seteditCatId(x._id)
          }}>
            <img
              title="edit"
              className="select-image img-fluid edit-questionnair"
              src={editIcon}
            />
          </Button>
          <Button onClick={() => { deletefunct(x._id) }}>
            <img
              title="delete"
              className="select-image img-fluid edit-questionnair"
              src={deleteicon}
            />
          </Button>

        </div>
      </>
    );
  };
  const handleSubmit = (data) => {
    let dataToSend = {
      category: current
    }
    if (isEdit) {
      dataToSend['cat_id'] = editCatId
      dataToSend['isEdit'] = isEdit

    }
    return fetch(`${API}/admin/addCategory`, {
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
          if (isEdit) alert("Category updated successfully");
          else alert("Category added successfully");
          setCount(false)
          setCurrent('')
          getCategory();
        }
        else {
          debugger
          toast.error(data.msg);
        }
        debugger
      })
      )
      .catch(err => console.log(err));
  };
  return (
    <>
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
      {getCategory()}
      <div>
        <div className="row mange-service-heading">
          <div className="admin-manage-data">
            <h4>Manage Service</h4>
          </div>
        </div>
        <div className="content-manage-service">
          <div className="col-md-12">
            <div className="col-md-12 button-manage-service">
              {allCat.length > 0 ? allCat.map(providerTable) : ""}
            </div>
            <div className="bottom-status">
              <div className="row mt-3">
                <div className="col-sm-12" style={{ paddingLeft: 28 }}>
                  <button
                    className="button admin-status-btn"
                    onClick={() => {
                      setPopup(true);
                      setShow(false);
                    }}
                  >
                    + Add Category
                  </button>
                </div>
                {/* <div className="col-sm-12 bottom-padding">
                  <button className="button admin-status-btn btn-edit">
                    Save
                  </button>
                  <button className="button admin-status-btn btn-approve">
                    Cancel
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <Modal
          show={showPopup}
          id="questionForm"
          onHide={handleCloseSignupForm}
          size="md"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>{isEdit ? "Edit Category" : "Add Category"}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container>
              <Row>
                <form >
                  <div className="col-md-12">
                    <div className="row">
                      <div className="form-group question-area">
                        <textarea
                          rows="3"
                          cols="50"
                          onChange={(e) => { setCurrent(e.target.value) }}
                          id="textareaForQuestion"
                          value={current}
                          required
                          placeholder="Category Name"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="submitQuestionForm" >
                    <button
                      type="button"
                      className="btn btn-lg btn btn-primary submitQuestionBtn"
                      onClick={handleSubmit}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </Row>
            </Container>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
}
