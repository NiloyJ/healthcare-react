
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth()
    return (
        <div>
            <Navbar fixed="sticky" bg="dark" sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">CaringYou</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/home#home">Home</Nav.Link>
                        <Nav.Link href="#services">Services</Nav.Link>
                        <Nav.Link href="#teams">Team</Nav.Link>
                        {user?.email ?
                            <Button onClick={logOut}>Logout</Button> :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                        <Link as={Link} to="/registration"><Button style={{height: '10vh', marginLeft:'2%'}}>Register</Button></Link>

                        <Navbar.Text>
                            <h5 style={{ marginLeft: '30%' }}>Actived Id: <a href="#login">{user?.displayName}</a></h5>
                        </Navbar.Text>
                    </Nav>
                </Container>
            </Navbar>



        </div>
    );
};

export default Header

