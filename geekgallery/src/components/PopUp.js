import { Modal, Button, Container, Row, Col } from "react-bootstrap";
const PopUp = (props) => {
    return (
        <>
        <Modal
          show={props.showModal}
          onHide={props.closeModal}
          backdrop="static"
          keyboard={false}
          centered
          dialogClassName="model-60w"
          style={{backgroundColor:`${props.modalData?.color}66`}}
        >
          <Modal.Body>
            <Container>
                <Row>
                    <Col md={6}>
                        <img style={{maxWidth:'100%',maxHeight:'75vh'}} src={props.modalData?.urls?.full} alt="Hii"/>
                    </Col>
                    <Col md={6}>
                        <h3>Uploaded By: {props.modalData?.user?.namw} @({props.modalData?.user?.id})</h3>
                        <h5>Upload Date: {props.modalData?.created_at}</h5>
                        <hr/>
                        {props.modalData?.description ?
                        (
                          <>
                          <h5>Description: </h5>
                          <h6>{props.modalData?.description}</h6>
                          <hr/>
                          </>
                        )
                        :false}
                        <h6>Width: {props.modalData?.width}</h6>
                        <h6>Height: {props.modalData?.height}</h6>
                    </Col>
                </Row>
            </Container>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={props.closeModal}>
              Close
            </Button>
            <Button variant="primary" href={props.modalData?.links?.download} target="_blank">Download</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}


export default PopUp;