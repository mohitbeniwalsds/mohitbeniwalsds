import React ,{useState} from 'react';
import Signupform from'./Signupform'
import {Modal, Button, Container, Row} from 'react-bootstrap';

 function Signuppop() {

  const [show, setShow] = useState(false);
  const [showPopup, setPopup] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCloseSignupForm = () => setPopup(false);
  const showSignForm = () => setPopup(true);

  return (
    <>
      <Modal show={show} id="signUpModel" onHide={handleClose} size="md" keyboard={false} aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
          <Row className="content-signUp justify-content-center">
            <Button className="signUpTabs" onClick={()=>{setPopup(true);setShow(false);}} variant="secondary" block>Sign up using Email</Button>{''}     
            <Button className="signUpTabs"  block>Sign up using Phone</Button>{''}
            <Button className="signUpTabs" block>Sign up using Google</Button>{''} 
          </Row>
        </Container>

        </Modal.Body>
      </Modal>
    </>
  );
}

 export default Signuppop