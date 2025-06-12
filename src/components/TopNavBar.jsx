import { useState } from 'react';
import './TopNavBar.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import { BsSun, BsMoon } from 'react-icons/bs';
import { FaFileDownload } from 'react-icons/fa';

function TopNavBar({ toggleTheme, isDarkTheme }) {
  return (
    <Navbar className="navbar-transparent" expand="lg" variant={isDarkTheme ? 'dark' : 'light'}>
      <Container>
        <Navbar.Brand className="logo">NIRANJAN</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto center-nav">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#work">Work</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
          <Nav className="right-items">
            <Form.Check
              type="switch"
              id="theme-switch"
              className="me-3 d-flex align-items-center"
              label={isDarkTheme ? <BsMoon className="ms-2"/> : <BsSun className="ms-2"/>}
              onChange={toggleTheme}
              checked={isDarkTheme}
            />
            <Nav.Link href="/resume.pdf" className="d-flex align-items-center">
              Resume <FaFileDownload className="ms-1"/>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNavBar;