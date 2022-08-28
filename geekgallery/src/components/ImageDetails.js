import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap"
import { useParams } from "react-router-dom"

export const ImageDetails = (props) => {
    const params = useParams();
    const [imageData, setImageData] = useState([]);
    useEffect(() => {
        axios.get(`https://api.unsplash.com/photos/${params.id}/?per_page=20&client_id=${process.env.REACT_APP_API_ACCESS_KEY}`)
            .then(res => setImageData(res.data));

    }, [params]);
    return (<>
        {imageData.id ? (
            <Container fluid mt={6} style={{ backgroundColor: `${imageData?.color}30` }} className='p-5'>
                <Row>
                    <Col md={6}>
                        <img style={{ maxWidth: '100%', maxHeight: '75vh' }} src={imageData?.urls?.full} alt="Hii" />
                    </Col>
                    <Col md={6}>
                        <h3>Uploaded By: {imageData?.user?.namw} @({imageData?.user?.id})</h3>
                        <h5>Upload Date: {imageData?.created_at}</h5>
                        <hr />
                        {imageData?.description ?
                            (
                                <>
                                    <h5>Description: </h5>
                                    <h6>{imageData?.description}</h6>
                                    <hr />
                                </>
                            )
                            : false}
                        <h6>Width: {imageData?.width}</h6>
                        <h6>Height: {imageData?.height}</h6>
                        <br />
                        <hr />
                        <Button style={{ backgroundColor: imageData?.color }} href={imageData?.links?.download} target="_blank">Download</Button>
                    </Col>
                </Row>
            </Container>
        ) : <h4>Loading...</h4>}
    </>)
}