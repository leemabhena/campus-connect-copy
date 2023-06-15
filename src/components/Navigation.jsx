import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/Navigation.css";

export const Navigation = () => {
  return (
    <Navbar expand="lg" className="Navigation">
      <Container>
        <Navbar.Brand href="#home" className="grey-color">
          Campus Connect
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            {" "}
            {/* Change the class to mx-auto for center alignment */}
            <Nav.Link href="#home" className="grey-color">
              Home
            </Nav.Link>
            <Nav.Link href="#link" className="grey-color">
              About
            </Nav.Link>
            <Nav.Link href="#link" className="grey-color">
              Features
            </Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            {" "}
            {/* Change the class to ml-auto for right alignment */}
            <div className="signing-btns">
              <a href="/login" className="login">
                Login <i class="fa-solid fa-arrow-right-to-bracket"></i>
              </a>
              <a href="/signup" className="signup">
                SignUp <i class="fa-solid fa-user-plus"></i>
              </a>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
