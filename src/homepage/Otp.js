// MyComponent.js
import React from 'react';
import sectionfirst from '../assets/homepage/sectionfirst.jpeg'
import Modal from 'react-bootstrap/Modal'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'

class Otp extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
    	phone: '',
      show:true,
  
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);

  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    alert('This page is under construction');
  }
    showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (

      <>
      <Modal show={this.state.show} id="Phonelogin" >
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
          <Row>
              <div className="containerh-100 signupform-margin">
        <form  onSubmit={this.handleSubmit}>
          <div className="form-group float-center col-12">
            <input type="text" className="form-control"  name="phone"  onChange={this.handleChange} value={this.state.phone}  placeholder="Enter otp"/>
          </div>
          <div className="d-flex justify-content-center mt-3 login_container">
            <button type="submit" className="btn btn-primary btn-signInSubmit">Submit</button>
          </div>
        </form>
        </div>
          </Row>
        </Container>
        </Modal.Body>
     </Modal>
    
        </>
    );
  }
}
export default Otp;