import { CheckBox } from '@material-ui/icons';
import React, { useState, useEffect } from 'react';
import Admin from './Admin.css';
import Button from '@material-ui/core/Button';
import saveIcon from '../assets/Icons/save.png';
import editIcon from '../assets/Icons/edit.png';
import deleteIcon from '../assets/admin/trash.webp';
import addIcon from '../assets/admin/addIcon.webp';
import { Modal, Container, Row } from 'react-bootstrap';
import { API } from "../backend";
import { ToastContainer, toast } from 'react-toastify';
import Questionform from './AddQuestion'
import Optionform from './AddOption'


export default function Questionnair() {
  const [show, setShow] = useState(false);
  const [allques, setallques] = useState({});
  const [showPopup, setPopup] = useState(false);
  const [showOptionPopup, setOptionPopup] = useState(false);
  const [phonePopup, setPhonePopup] = useState(false);
  const [current, setCurrent] = useState();
  const [currentsub, setCurrentsub] = useState();
  const [count, setCount] = useState(false);
  const [categorys, setcategorys] = useState();
  const [categorysel, setcategorysel] = useState();
  const getcurrentlyClicked = function () {
    if (!count) {
      setCount(true)
      fetch(`${API}/admin/getAllQuestion`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          }
        })
        .then(response => response.json().then(data => {
          if (response.status == 200) {
            setallques(data)
            // localStorage.setItem({
            //   data:data
            // })
          } else {
            toast.error("Ooops!! Failed to fetch data.");
          }
        })
        )
        .catch(err => toast.error("Ooops!! Something went wrong."));
    }
  }
  const getCategory = function () {
    if (!count) {
      setCount(true)
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
              setcategorys(data)
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
  useEffect(() => {
    const interval = setInterval(() => {
      if (JSON.parse(localStorage.getItem('getQues'))) {
        localStorage.setItem('getQues', false)
        getcurrentlyClicked1();
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  const getcurrentlyClicked1 = function () {
    fetch(`${API}/admin/getAllQuestion`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      })
      .then(response => response.json().then(data => {
        if (response.status == 200) {
          setallques(data)
          // localStorage.setItem({
          //   data:data
          // })
        } else {
          toast.error("Ooops!! Failed to fetch data.");
        }
      })
      )
      .catch(err => toast.error("Ooops!! Something went wrong."));
  }
  const deleteOption = function (quesid, optid) {
    let dataToSend = {
      quesId: quesid,
      optId: optid
    };
    return fetch(`${API}/admin/deleteOption`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(dataToSend)
    })
      .then(response => response.json().then(data => {
        if (response.status == 200) {
          alert("Option deleted successfully");
          getcurrentlyClicked1();
        }
        else {
          alert("Failed to delete Option.");
        }
      })
      )
      .catch(err => console.log(err));
  };
  const deleteQuestion = function (quesid) {
    let dataToSend = {
      quesId: quesid
    };
    return fetch(`${API}/admin/deleteQuestion`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(dataToSend)
    })
      .then(response => response.json().then(data => {
        if (response.status == 200) {
          alert("Question deleted successfully");
          getcurrentlyClicked1();
        }
        else {
          alert("Failed to delete Question.");
        }
      })
      )
      .catch(err => console.log(err));
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCloseSignupForm = () => setPopup(false);
  const handleCloseSignupForm1 = () => setOptionPopup(false);
  const showSignForm = () => setPopup(true);
  const handleChange = (data) => {
    localStorage.setItem("cat_ques", data.target.value);
    setCurrent(data.target.value)
  };
  const handleChangeSub = (data) => {
    localStorage.setItem("subcat_ques", data.target.value);
    setCurrentsub(data.target.value)
  };

  const catSelectItems = function () {
    if (categorys && categorys.length > 0) {
      let items = [];
      for (let i = 0; i < categorys.length; i++) {
        items.push(<option key={i} value={categorys[i].category}>{categorys[i].category}</option>);
        //here I will be creating my options dynamically based on
        //what props are currently passed to the parent component
      }
      return items;
    }
  }
  const subcatSelectItems = function () {
    if (categorys && categorys.length > 0 && current) {
      let items = [];
      let index = categorys.findIndex(x => { return x.category == current })
      for (let i = 0; i < categorys[index].subcategory.length; i++) {
        items.push(<option key={i} value={categorys[index].subcategory[i].value}>{categorys[index].subcategory[i].value}</option>);
        //here I will be creating my options dynamically based on
        //what props are currently passed to the parent component
      }
      return items;
    }
  }
  const optionTable = ((y, x, index) => {
    return (
      <>
        <label
          className="label-checkbox label-questionnair"
          for="dummy1">{++index}) {x.value}
        </label>
        <Button
          onClick={() => { deleteOption(y._id, x._id) }}>
          <img
            title="Delete option"
            className="select-image img-fluid edit-option"
            src={deleteIcon} />
        </Button>
      </>
    )
  })
  const providerTable = ((x, index) => {
    return (
      <>
        {(x.category == current && !currentsub) || (x.category == current && currentsub && x.subcategory == currentsub) ?
          <div className="col-md-10">
            <label className="label-questionnair">
              {"Ques " + ++index + ". " + x.question + "."}
              <Button
                className={(x.category == current && !currentsub) || (x.category == current && currentsub && x.subcategory == currentsub) ? "" : "d-none"}
                onClick={() => { deleteQuestion(x._id) }}>
                <img
                  title="Delete question"
                  className="select-image img-fluid edit-questionnair"
                  src={deleteIcon} />
              </Button>
            </label>
            <br />
            {x.options.length > 0 && ((x.category == current && !currentsub) || (x.category == current && currentsub && x.subcategory == currentsub)) ? x.options.map((y, index) => { return optionTable(x, y, index) }) : ""}

            {/* <input type="checkbox" id="dummy1" className="checkbox-questionnair checkbox-1" name="dummy1" value="dummy1"/>
        <label className="label-checkbox" for="dummy1"> I have a bike</label><br /> */}
          </div>
          : ""}
        <div className="col-md-2">
          <div className={(x.category == current && !currentsub) || (x.category == current && currentsub && x.subcategory == currentsub) ? "button-questionnair" : "d-none"}>
            <Button><img title="edit" className="select-image img-fluid edit-questionnair" onClick={() => { setPopup(true); setShow(false); localStorage.setItem('editQues', JSON.stringify(x)); }} src={editIcon} />
            </Button>
            <Button>
              <img
                title="Add question"
                className="select-image img-fluid add-questionnair-question" onClick={() => { setOptionPopup(true); setShow(false); localStorage.setItem('currQues', x._id) }}
                src={addIcon} />
            </Button>
          </div>
        </div>
      </>
    )
  })


  const buttonsForQuestion = ((x, index) => {
    return (
      <div className="button-questionnair">
        <Button><img className="select-image img-fluid" src={saveIcon} />
        </Button>
        <Button><img title="edit" className="select-image img-fluid edit-questionnair" onClick={() => { setOptionPopup(true); setShow(false); }} src={editIcon} />
        </Button>
      </div>
    )
  })

  return (
    <>
      {getcurrentlyClicked()}
      {getCategory()}
      <div className="AdminLiveOperation">
        <div className="row headerHeading">
          <div className="admin-logo-icon">
            <h4>Questionnair</h4>
          </div>
        </div>

        <form>
          <div className="row mt-2">
            <div className="col-sm-3">
              <div class="form-group ">
                <div className="responsive">
                  <div class="form-group ">
                    <select class="form-control" onChange={(e) => handleChange(e)}>
                      <option value="">Enter Category</option>
                      {catSelectItems()}
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div class="form-group ">
                <div className="responsive">
                  <div class="form-group ">
                    <select class="form-control" onChange={(e) => handleChangeSub(e)}>
                      <option value="">Enter SubCategory</option>
                      {subcatSelectItems()}
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-2 taskButton">
              <button type="button" className="btn btn-block admin-status-btn">Search</button>
            </div>
          </div>
        </form>

        <div className="contentBorder admin-service-name">
          <h4>{current}</h4>
        </div>
        <span ></span>
        <div className={allques.length > 0 ? "listing-service-admin contentBorder" : "listing-service-admin contentBorder d-none"}>
          <div className="row">
            <div className="col-md-12">
              {allques.length > 0 ? allques.map(providerTable) : ""}
            </div>
            {/* <div className="col-md-2">
                  {allques.length>0?allques.map(buttonsForQuestion):""}
              </div> */}
          </div>
        </div>
        <span ></span>

        <div className="bottom-status">
          <div className="row mt-3">
            <div className="col-sm-4">
              <button className="button admin-status-btn" onClick={() => { setPopup(true); setShow(false); }}>Add Question</button>
            </div>
            <div className="col-sm-4"></div>
            {/* <div className="col-sm-4" style={{paddingLeft:45}}>
                <button className="button admin-status-btn btn-edit">Save</button>
                <button className="button admin-status-btn btn-approve">Cancel</button>
              </div> */}
          </div>
        </div>
      </div>
      <Modal show={showPopup} id="questionForm"
        onHide={handleCloseSignupForm} size="md"
        keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Questionform />
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
      <Modal show={showOptionPopup} id="optionForm"
        onHide={handleCloseSignupForm1} size="md"
        keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Optionform />
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  )
}