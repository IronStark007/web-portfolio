import React from "react";
import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = (props) => {
  const navigate = useNavigate();

  const formSubmitted = (e) => {
    e.preventDefault();
    props.setSearchKey(props.searchRef.current.value);
    navigate(`/search/?q=${props.searchRef.current.value}`);
  };

  const titleHandler = (e) => {
    e.preventDefault();
    props.setSearchKey("");
    props.searchRef.current.value = "";
    navigate("/");
  };

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand>
            <Link
              to="/"
              style={{ textDecoration: "None", color: "black" }}
              onClick={titleHandler}
            >
              GeekGallery
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Form className="d-flex" onSubmit={formSubmitted}>
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                ref={props.searchRef}
              />
              <Button variant="outline-success" onClick={formSubmitted}>
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
