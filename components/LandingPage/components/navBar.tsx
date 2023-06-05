"use client";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import GetStartedLink from "./getStartedLink";
import styles from "../styles/navBar.module.css";

const NavBar = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="yellowgreen"
      className={styles.navBackground}
      variant="light"
      sticky="top"
    >
      <Container>
        <Navbar.Brand href="#home">Jamit</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#categories">Categories</Nav.Link>
            <Nav.Link href="#podcasts">Podcast</Nav.Link>
            <Nav.Link href="#users">Users</Nav.Link>
            <Nav.Link href="#tools">Tools</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#login">Login</Nav.Link>
            <Nav.Link eventKey={2} href="#signup">
              Get Started
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
