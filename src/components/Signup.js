import React ,{useState} from 'react';
import Signupform from'./Signupform'
import Phoneform from '../homepage/Phoneform'
import {Modal, Button, Container, Row} from 'react-bootstrap';
import './SignUp.css'
import '../Style.css'

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

      <Modal show={show} id="signUpModel" onHide={handleClose} size="lg" keyboard={false} aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
          <Row className="content-signUp justify-content-center">
            <Button id="signUpTabs" className="signUpTabs btn-lg" onClick={()=>{setPopup(true);setShow(false);}}>Sign up using Email</Button>{''} 
            <Button id="signUpTabs" className="signUpTabs mt-3 btn-lg">Sign up using Google</Button>{''} 
          </Row>
        </Container>

        </Modal.Body>
      </Modal>
      <Modal show={showPopup} id="signUpForm" onHide={handleCloseSignupForm} size="lg"  keyboard={false} aria-labelledby="contained-modal-title-vcenter"
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
    <Modal show={phonePopup} id="phoneForm" onHide={()=>{setPhonePopup(false)}} size="md" keyboard={false} aria-labelledby="contained-modal-title-vcenter">
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