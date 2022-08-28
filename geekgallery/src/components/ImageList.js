import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import ImageCard from './ImageCard';
import Masonry from 'react-masonry-css';

const ImageList = (props) => {
    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1
    };

    return (
        <>
            <Container fluid className="mt-4">
                <Row>
                    <Masonry
                        breakpointCols={breakpointColumnsObj}
                        className="my-masonry-grid"
                        columnClassName="my-masonry-grid_column"
                    >
                        {props.images.map((ele, idx) => {
                            return <Col key={idx}><ImageCard image_details={ele} /></Col>
                        })}
                    </Masonry>
                </Row>
            </Container>
        </>
    );
}

export default ImageList;