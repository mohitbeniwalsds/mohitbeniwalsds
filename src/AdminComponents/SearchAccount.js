import React, { useState } from 'react';
import dummyImage from '../assets/admin/dummy12.jpg';
import pdfLogo from '../assets/admin/pdf-logo.png';
import PDFViewer from 'pdf-viewer-reactjs';
import { Modal, Row, Container } from 'react-bootstrap';
import { useEffect } from "react";
import { Link } from 'react-router-dom';
import { Redirect } from "react-router-dom";
import './Admin.css';
import CKEditor from 'ckeditor4-react';
import { API } from "../backend";
import renderHTML from 'react-render-html';
export default function SearchAccount() {
  var currentlyClicked; var extension;
  const arr = [];
  const getdata = JSON.parse(localStorage.getItem('currentlyClicked'));
  const getcurrentlyClicked = (() => {
    currentlyClicked = JSON.parse(localStorage.getItem('currentlyClicked'));
    arr[0] = { file: `${API}/files/${currentlyClicked.background}` }
    arr[0].type = currentlyClicked.background.substring(currentlyClicked.background.indexOf('.') + 1)

    arr[1] = { file: `${API}/files/${currentlyClicked.child_abuse}` }
    arr[1].type = currentlyClicked.child_abuse.substring(currentlyClicked.child_abuse.indexOf('.') + 1)

    arr[2] = { file: `${API}/files/${currentlyClicked.visa_document}` }
    arr[2].type = currentlyClicked.visa_document.substring(currentlyClicked.visa_document.indexOf('.') + 1)

    arr[3] = { file: `${API}/files/${currentlyClicked.vulnebrity_check}` }
    arr[3].type = currentlyClicked.vulnebrity_check.substring(currentlyClicked.vulnebrity_check.indexOf('.') + 1)

    arr[4] = { file: `${API}/files/${currentlyClicked.work_reference}` }
    arr[4].type = currentlyClicked.work_reference.substring(currentlyClicked.work_reference.indexOf('.') + 1)

    arr[5] = { file: `${API}/files/${currentlyClicked.photo_id}` }
    arr[5].type = currentlyClicked.photo_id.substring(currentlyClicked.photo_id.indexOf('.') + 1)
  });

  const handleClose = () => setShow(false);
  const [show, setShow] = useState(false);
  const [value, setValue] = useState({});
  const [redirect, setredirect] = useState(false);
  const [component, setComponent] = useState('#EA4337')
  const [color1, setColor1] = useState('#EA4337')
  const [color2, setColor2] = useState('#ccc')
  const [color3, setColor3] = useState('#EA4337')
  const [color4, setColor4] = useState('')
  const [color5, setColor5] = useState('#ccc')
  const [color6, setColor6] = useState('')

  const [display1, setDisplay1] = useState()
  const [display2, setDisplay2] = useState('none')
  const [display3, setDisplay3] = useState('none')
  const [intro, setintro] = useState(getdata.intro)
  const [ckeditor, setckeditor] = useState('')

  const redirected = () => {
    if (redirect)
      return <Redirect to={{
        pathname: "/show_documents",
        state: { id: value }
      }} />
  }//{currentlyClicked.background.substring(currentlyClicked.background.lastIndexOf(".")+1)=='pdf'?currentlyClicked.background:""}
  const clicked = (id) => {
    setValue(id)
    setredirect(true)
  }

  const saveNewSetting = () => {
    let get = JSON.parse(localStorage.getItem("currentlyClicked"))
    if (get) {
      fetch(`${API}/professional/updatePersonalSetting`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(get)
        })
        .then(response => response.json().then(data => {
          if (response.status == 200) {
            alert("Details Updated Successfully .");
            console.log(data)
            localStorage.setItem('currentlyClicked', JSON.stringify(data))
          }
          else {
            alert("Ooops!! Updation Failed .");
          }
        })
        )
      // .catch(err => toast.error("Ooops!! Something went wrong."));
    }
  }
  const checkeditor = () => {
    getdata.intro = ckeditor
    localStorage.setItem('currentlyClicked', JSON.stringify(getdata))
    console.log(getdata)
    setTimeout(function () { saveNewSetting() }, 2000);
  }
  return (
    <>
      {getcurrentlyClicked()}
      <div className="container status-content">
        <div className="contentBorder">
          <div className="row-width row">
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4" style={{ color: color1, boderBottomColor: color1, borderBottomLeftRadius: '0', borderBottomRightRadius: '0', borderBottom: '4px solid' }}>
              <button className="btn button activeclass" id="button" style={{ color: color3 }} onClick={() => { setColor1('#EA4337'); setColor2('#ccc'); setDisplay1('block'); setDisplay2('none'); setDisplay3('none'); setColor4(''); setColor5('#ccc'); setColor3('#EA4337'); setColor6('') }}>Documents</button>
            </div>
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4" style={{ color: color2, boderBottomColor: color2, borderBottomLeftRadius: '0', borderBottomRightRadius: '0', borderBottom: '4px solid ' }}>
              <button className="btn button pastclass" style={{ color: color4 }} onClick={() => { setColor1('#ccc'); setColor2('#EA4337'); setDisplay1('none'); setDisplay2('block'); setDisplay3('none'); setColor3(''); setColor5('#ccc'); setColor4('#EA4337'); setColor6('') }}>Introduction</button>
            </div>
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4" style={{ color: color5, boderBottomColor: color5, borderBottomLeftRadius: '0', borderBottomRightRadius: '0', borderBottom: '4px solid ' }}>
              <button className="btn button pastclass" style={{ color: color6 }} onClick={() => { setColor1('#ccc'); setColor2('#ccc'); setDisplay1('none'); setDisplay2('none'); setColor3(''); setColor4(''); setColor5('#EA4337'); setColor6('#EA4337'); setDisplay3('block') }}>Images</button>
            </div>
          </div>
          <hr className="activepastline"></hr>
          <div className="responsive" style={{ display: display1 }}>
            <div class="form-group ">
              <table className="table text-center">
                <tr>
                  <td>
                    <Link to="/show_documents" target="_blank"><img src={pdfLogo} className="account-image-admin-pdf" alt="User Account Image" /> <lable>{arr[0].type == 'pdf' ? "All Documents" : ""}</lable></Link>
                  </td>
                  <td><p className="table-row-content-1">All Documents</p></td>
                  <td><p className="table-row-content-1">20 Oct 2020,12:10pm</p></td>
                </tr>
                {/* <tr>
                  <td>
                    <Link to="/" target="_blank"><img src={pdfLogo} className="account-image-admin-pdf" alt="User Account Image" /> <lable>Name.pdf</lable></Link>
                  </td>
                  <td><p className="table-row-content-1">Driving License</p></td>
                  <td><p className="table-row-content-1">20 Oct 2020,12:10pm</p></td>
                </tr>
                <tr>
                  <td>
                    <Link to="/" target="_blank"><img src={pdfLogo} className="account-image-admin-pdf" alt="User Account Image" /> <lable>Name.pdf</lable></Link>
                  </td>
                  <td><p className="table-row-content-1">Driving License</p></td>
                  <td><p className="table-row-content-1">20 Oct 2020,12:10pm</p></td>
                </tr> */}
              </table>
            </div>
          </div>
          <div className="responsive" style={{ display: display2 }}>
            <CKEditor
              data={getdata.intro}
              onChange={evt => setckeditor(evt.editor.getData())}
            />
            {/* <input type="text" defaultValue={dangerouslySetInnerHTML = { __html: intro } name="intro" onChange={(e) => introchange("intro", e)} /> */}
            <p className="paragarh-account-search">
            </p>
          </div>
          <div className="responsive" style={{ display: display3 }}>
            <div class="form-group ">
              <table className="table text-center">
                <tr>
                  <td>
                    <Link to="/"><img src={getdata.profileImages.map((e) => {
                      return(
                        `${API}/files/${e}`
                      )
                    })} className="account-image-admin" alt="User Account Image" /></Link>
                  </td>
                  <td><p className="table-row-content">Profile Image</p></td>
                  <td><p className="table-row-content">20 Oct 2020,12:10pm</p></td>
                </tr>
                {/* <tr>
                  <td>
                    <Link to="/"><img src={dummyImage} className="account-image-admin" alt="User Account Image" /></Link>
                  </td>
                  <td><p className="table-row-content">Cover Image</p></td>
                  <td><p className="table-row-content">20 Oct 2020,12:10pm</p></td>
                </tr>
                <tr>
                  <td>
                    <Link to="/"><img src={dummyImage} className="account-image-admin" alt="User Account Image" /></Link>
                  </td>
                  <td><p className="table-row-content">Profile Image</p></td>
                  <td><p className="table-row-content">20 Oct 2020,12:10pm</p></td>
                </tr> */}
              </table>
            </div>
          </div>
        </div>

        <div className="bottom-status">
          <div className="row mt-3">
            <div className="col-sm-2">
              <button className="button admin-status-btn btn-save" onClick={() => checkeditor()}>Save</button>
            </div>
            {/* <div className="col-sm-2" style={{ display: display2 }}>
              <button className="button admin-status-btn btn-edit">Edit</button>
            </div> */}
            <div className="col-sm-2 div-btn-cancel">
              <button className="button admin-status-btn btn-cancel">Cancel</button>
            </div>
            {/* <div className="col-sm-2 div-btn-approve" style={{display:display2}}>
            <button className="button admin-status-btn btn-approve">Approve</button>
          </div>
          <div className="col-sm-2 div-btn-reject" style={{display:display2}}>
            <button className="button admin-status-btn btn-reject">Reject</button>
          </div> */}
            {/* <div className="col-md-4 div-btn-upload" style={{display:display1}}>
            <button className="button admin-status-btn btn-upload">Upload Documents</button>
          </div> */}

          </div>
        </div>

        <Modal show={show} id="showPDF" onHide={handleClose} size="lg" keyboard={false} aria-labelledby="contained-modal-title-vcenter" centered>
          <Modal.Header closeButton>
            <Modal.Title></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container>
              <Row className="content-signUp justify-content-center mt-2">
                <PDFViewer document={{ url: 'https://arxiv.org/pdf/quant-ph/0410100.pdf', }} />
              </Row>
            </Container>
          </Modal.Body>
        </Modal>
        {redirected()}
      </div>
    </>
  );
}
