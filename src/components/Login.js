import React ,{useState} from 'react'
import LoginForm from'./LoginForm'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Row from 'react-bootstrap/Row'
import '../Style.css'
import './Login.css'
import  Signup from "./Signup";
import {Link} from 'react-router-dom';
 import  Signupform from "./Signupform";
 import Phonelogin from "../homepage/Phonelogin"

 function Login() {
   
  const [show, setShow] = useState(false);
  const [showLogin, setLogin] = useState(false);
  const [showsignup, setShowsignup] = useState(false);
  const [showPopup, setPopup] = useState(false);
  const [showPhone,setShowPhone]= useState(false);

  const handleClose = () =>{ 
    setShow(false);
    setLogin(false);
    setShowsignup(false);
    setPopup(false);
    setShowPhone(false);
  }
  const handleShow = () => {
    setShow(true);setLogin(false);setShowsignup(false);setPopup(false);setShowPhone(false);
  }
  const handleCloseLoginForm = () => {
    setLogin(false);
    setShowsignup(false);setPopup(false);setShowPhone(false);
    setShow(false)
  }
  const handleCloseSignupForm = () => {
    setPopup(false);
  }
  const showSignForm = () => {
    setPopup(true);
    setShow(false);
    setLogin(false);
    setShowsignup(false);
    setShowPhone(false);
  }
  const showSignUpOptions =() =>{

    return <Modal show={showsignup} id="signUpModel" onHide={handleClose} size="lg" keyboard={false} aria-labelledby="contained-modal-title-vcenter">
    <Modal.Header closeButton>
      <Modal.Title></Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Container>
      <Row className="content-signUp justify-content-center">
        <Button id="signUpTabs" className="signUpTabs btn-lg" onClick={()=>{setPopup(true);setShowsignup(false);}} variant="secondary" block>Sign up using Email</Button>{''}     
        {/* <Button className="signUpTabs mt-3 btn-lg"  block>Sign up using Phone</Button>{''} */}
        <Button id="signUpTabs" className="signUpTabs mt-3 btn-lg" block>Sign up using Google</Button>{''} 
      </Row>
    </Container>
    </Modal.Body>
</Modal>

  }


  const showSignUpForm =() =>{

    return  <Modal show={showPopup} id="signUpForm" onHide={handleCloseSignupForm} size="lg" keyboard={false} aria-labelledby="contained-modal-title-vcenter"
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


  } 
const phoneLogin =() =>{
    return <Modal show={showPhone} id="Phonelogin" style={{height:"400px"}} onHide={()=>{setShowPhone(false);}} size="md"  keyboard={false} aria-labelledby="contained-modal-title-vcenter"
      >
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
          <Row>
              <Phonelogin/>
          </Row>
        </Container>
        </Modal.Body>
     </Modal>
}


const loginPopUp =() =>{
  return   <Modal show={show} id="loginUpModel" onHide={handleClose} size="lg">
            <Modal.Header closeButton>
              <Modal.Title></Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Container>
              <Row  className="justify-content-center">
                <Button className="loginwithemail btn-lg" id="loginTabs" onClick={()=>{setLogin(true);setShow(false);setShowsignup(false);setPopup(false);setShowPhone(false);}}>Login with Email</Button>{''}     
                <Button className="loginwithphone mt-3 btn-lg" id="loginTabs" onClick={()=>{setShowPhone(true);setShow(false);setShow(false);setShowsignup(false);setPopup(false);}}>Login with Phone</Button>{''}
                <Button className="loginwithgoogle mt-3 btn-lg" id="loginTabs">Login with Google</Button>{''} 
              </Row>
            </Container>
            <Container className="mt-3">
            <div className="d-flex justify-content-center links ml-5 mt-4" onClick={()=>{setLogin(false);setShow(false);setShowsignup(true);setPopup(false);setShowPhone(false);}}>
                Don't have an account?<Signup />
              </div> 
            </Container>
            </Modal.Body>
          </Modal>
}
const loginForm =()=>{
  return    <Modal id="login-form" show={showLogin} onHide={handleCloseLoginForm} size="lg" keyboard={false} aria-labelledby="contained-modal-title-vcenter"
                centered>
                  <Modal.Header closeButton>
                    <Modal.Title></Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Container>
                    <Row>
                        <LoginForm />
                    </Row>
                  </Container>
                  </Modal.Body>
              </Modal>
}
  return (
    <>
      <Button id="login-btn" onClick={handleShow}>
        Log in
      </Button>
      {show?loginPopUp():""}
      {showsignup?showSignUpOptions():""}
      {showPopup?showSignUpForm():""}
      {showPhone?phoneLogin():""}
      {showLogin?loginForm():""}

    </>
  );
}

 export default Login