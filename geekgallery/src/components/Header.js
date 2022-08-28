import React, { useRef } from 'react';
import {Navbar, Container,Nav, Form, FormControl, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Header = (props) => {
  const searchRef = useRef();
  const navigate = useNavigate();

  const formSubmitted = e => {
    e.preventDefault();
    props.setSearchKey(searchRef.current.value);
    navigate(`/search/?q=${searchRef.current.value}`);

  }
    return (
        <>
        <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand><Link to="/" style={{textDecoration:"None",color:"black"}}>GeekGallery</Link></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
      </Nav>
      <Form className="d-flex" onSubmit={formSubmitted}>
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          ref={searchRef}
        />
        <Button variant="outline-success" onClick={formSubmitted}>Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </>
    );
}

export default Header;