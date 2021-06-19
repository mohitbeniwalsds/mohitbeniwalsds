import React ,{Component ,useState} from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Row from 'react-bootstrap/Row'
import '../Style.css'

 function Joinas() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button  id="joinas" onClick={handleShow}>
        Join as a Professional
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
          <Row>
            <p className="bottomLine">This page is under construction</p>
          </Row>
        </Container>

        </Modal.Body>
      </Modal>
    </>
  );
}

 export default Joinas