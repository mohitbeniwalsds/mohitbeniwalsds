import React ,{useState} from 'react'
import LoginForm from'./LoginForm'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Row from 'react-bootstrap/Row'
import '../Style.css'
import './Login.css'
import  Signup from '../components/Signup'
import {Link} from 'react-router-dom'
 
 function Loginpopup() {
   
  const [show, setShow] = useState(true);
  const [showLogin, setLogin] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCloseLoginForm = () => setLogin(false);
  const showdashboard = () => setLogin(true);

  return (
    <>
    <Modal show={show} id="loginUpModel" onHide={handleClose} size="md">
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
          <Row  className="justify-content-center">
            <Button className="loginwithemail signUpTabs mt-2" onClick={()=>{setLogin(true);setShow(false);}} variant="secondary" block>Login with Email</Button>{''}     
            <Button className="loginwithphone signUpTabs mt-2"  block>Login with Phone</Button>{''}
            <Button className="loginwithgoogle signUpTabs mt-2" block>Login with Google</Button>{''} 
          </Row>
        </Container>
        <Container className="mt-4 ml-4">
        <div className="d-flex justify-content-center links" onClick={handleClose}>
            Don't have an account?<Signup />
          </div> 
        </Container>
        </Modal.Body>
      </Modal>
    </>
  );
}

 export default Loginpopup