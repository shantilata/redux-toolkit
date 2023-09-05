import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand as={Link} to="/" style={{ color: "#758fc2" }}> Producer </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">

                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/user">User</Nav.Link>
                            <Nav.Link as={Link} to="/post">Post</Nav.Link>
                            <Nav.Link as={Link} to="/reg_form">Registration</Nav.Link>
                            <Nav.Link as={Link} to="/log_in_form">Login</Nav.Link>

                            <Nav.Link as={Link} to="/all-products">All-Products</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header