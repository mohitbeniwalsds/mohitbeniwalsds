import React, { useState, useEffect } from 'react';
import { white } from 'material-ui/styles/colors';
import { Modal, Container, Row } from 'react-bootstrap';
import MyUploader from "./DropZone";
import { Link, useLocation } from "react-router-dom";
import { API } from "../backend";
import { ToastContainer, toast } from "react-toastify";
import './Admin.css';
import editIcon from "../assets/Icons/edit.png";
import Button from "@material-ui/core/Button";


export default function ManageServiceType() {
  const [show, setShow] = useState(false);
  const [showPopup, setPopup] = useState(false);
  const [current, setCurrent] = useState();
  const [cat, setcat] = useState(useLocation());
  const [subcat, setsubcat] = useState();
  const handleCloseSignupForm = () => setPopup(false);
  const [count, setCount] = useState(false);
  const showSignForm = () => setPopup(true);
  const handleClose = () => setShow(false);
  const [editCatId, seteditCatId] = useState();
  const handleShow = () => setShow(true);
  const [isEdit, setisEdit] = useState();
  const [filese, setfilese] = useState(null)
  const providerTable = (x, index) => {
    return (
      <>
        <div className="col-md-6 inline box-manage-service inline">
          {x.value}
        </div>
        <div className="inline">
          <Button onClick={() => {
            setPopup(true);
            setShow(false);
            setisEdit(true);
            setCurrent(x.value);
            seteditCatId(x._id)
          }}>
            <img
              title="edit"
              className="select-image img-fluid edit-questionnair"
              src={editIcon}
            />
          </Button>
        </div>
      </>
    );
  };
  const getCategory = function () {
    if (!count) {
      setCount(true);
      fetch(`${API}/admin/getCategory`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ catId: cat.query._id })
      })
        .then((response) =>
          response.json().then((data) => {
            if (response.status == 200) {
              setsubcat(data.subcategory);
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
  const handleSubmit = (data) => {
    let dataToSend = {
      category: cat.query._id,
      subcategory: current
    }
    if (isEdit) {
      dataToSend['cat_id'] = editCatId
      dataToSend['isEdit'] = isEdit
    }
    return fetch(`${API}/admin/addSubCategory`, {
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
          if (isEdit) alert("SubCategory updated successfully");
          else alert("SubCategory added successfully");
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

  
  const categoryimage = (e) => {
    var formdata = new FormData();
    formdata.append("cat_id", cat.query._id);
    formdata.append("categoryImage", e.target.files[0]);
    console.log(e.target.files[0])

    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };

    fetch("http://54.237.177.207/admin/updateCategory", requestOptions)
      .then(response => response.text())
      .then(result => alert(result.msg))
      .catch(error => console.log('error', error));
  }
  return (
    <>
      {getCategory()}
      <div>
        <div className=" mange-service-heading">
          <div className="col-md-10 inline admin-manage-data">
            <h4>Manage Service</h4>
          </div>
          <div className="inline">
            <Link to="/newAdmin/mangeService"
              className="button btn-danger admin-status-btn btn-approve">
              Back
            </Link>
          </div>
        </div>
        <div className="content-manage-service row">
          <div className="col-md-12">
            <div className="col-md-10 button-manage-service">
              <lable>Name of the Category
                <input
                  className="btn-service"
                  type="button"
                  value={cat.query.category}
                  style={{ background: white }} /></lable>
            </div>
            {/* {subcat && subcat.length > 0 ? subcat.map(providerTable) : ""} */}
          </div>
          <div className="col-md-12" mb-30 style={{ paddingTop: 37, marginBottom: 37 }}>
            <div className="drop-message">
              <div className="upload-icon"></div>
              <input type="file" name="profileImages" className="drop-message" id="profile_pic_upload" onChange={(e) => categoryimage(e)} placeholder="Upload image" />
              <p></p>
              <p>Tab and Select Image</p>
            </div>

            {/* <MyUploader /> */}
          </div>
          {subcat && subcat.length > 0 ? subcat.map(providerTable) : ""}
          <div className="bottom-status col-md-12">
            <div className="row mt-3">
              <div className="col-sm-12 " style={{ paddingLeft: 28 }}>
                <button
                  className="button admin-status-btn"
                  onClick={() => { setPopup(true); setShow(false); }}>
                  + Add Service
                </button>
              </div>
            </div>
          </div>
        </div>
        <Modal show={showPopup} id="questionForm"
          onHide={handleCloseSignupForm} size="lg"
          keyboard={false} size="md" >
          <Modal.Header closeButton>
            <Modal.Title>Add Service</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container>
              <Row>
                <form>
                  <div className="col-md-12">
                    <div className="row">
                      <div className="form-group question-area">
                        <textarea
                          rows="3"
                          cols="50"
                          onChange={(e) => { setCurrent(e.target.value) }}
                          id="textareaForQuestion"
                          name="categoryName"
                          value={current}
                          required
                          placeholder="Category Name"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="submitQuestionForm col-md-12">
                    <button type="button" onClick={handleSubmit} className="btn btn-lg btn btn-primary submitQuestionBtn">Submit</button>
                  </div>
                </form>
              </Row>
            </Container>
          </Modal.Body>
        </Modal>
      </div>
    </>
  )
}