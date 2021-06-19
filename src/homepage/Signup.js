import React ,{useState} from 'react';
import '../App.css';
import Signupform from'./Signupform'
import Phoneform from './Phoneform'
import {Modal, Button, Container, Row} from 'react-bootstrap';

 function Signup() {

  const [show, setShow] = useState(false);
  const [showPopup, setPopup] = useState(false);
  const [phonePopup, setPhonePopup] = useState(false);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCloseSignupForm = () => setPopup(false);
  const showSignForm = () => setPopup(true);

  return (
    <>
      <Button id="sign-btn" onClick={handleShow}>
        Sign up
      </Button>

      <Modal show={show} id="signUpModel" onHide={handleClose} size="lg" keyboard={false} aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
          <Row className="content-signUp justify-content-center mt-2">
            <Button className="signUpTabs btn-lg" onClick={()=>{setPopup(true);setShow(false);}} variant="secondary" block>Sign Up using Email</Button>{''}     
            <Button className="signUpTabs mt-3 btn-lg"  onClick={()=>{setPhonePopup(true);setShow(false);}}  block>Sign Up using Phone</Button>{''}
            <Button className="signUpTabs mt-3 btn-lg" block>Sign Up using Google</Button>{''} 
          </Row>
        </Container>

        </Modal.Body>
      </Modal>
      <Modal show={showPopup} id="signUpForm" onHide={handleCloseSignupForm} size="lg" backdrop="static" keyboard={false} aria-labelledby="contained-modal-title-vcenter"
      >
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
          <Row>
              <Signupform/>
          </Row>
        </Container>

        </Modal.Body>
      
      </Modal>
    <Modal show={phonePopup} id="phoneForm" onHide={()=>{setPhonePopup(false)}} size="md" backdrop="static" keyboard={false} aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton>
          <Modal.Title>Signup</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
          <Row>
              <Phoneform/>
          </Row>
        </Container>

        </Modal.Body>
      
      </Modal>
    </>
  );
}

 export default Signup