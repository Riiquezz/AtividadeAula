import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import logo from '../assets/logo.png';
import Image from 'react-image-resizer';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Link } from 'react-router-dom';

const Styles = styled.div`
    .navbar {
        background-color: #222;
    }

    .navbar-brand, .navbar-nav .nav-link {
        color: #bbb;

    &:hover{
        color: white;
    }
    }
`;

export const NavigationBar = () => (
    <Styles>
        <Navbar expand="lg">
        <Navbar.Brand href="#home">
            <Image
                                src={logo}
                                width={50}
                                height={50}
                                Styles={Styles.image}
                            />
            {"The site!"}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="baisc-navbar-nav">
            <Nav className="ml-auto">
                <Router>
                    <Nav.Link><Link to="/" className="ml-auto">Home</Link></Nav.Link>
                    <Nav.Item><Nav.Link href="/"><h4>Home</h4></Nav.Link></Nav.Item>
                    
                    <Nav.Item><Nav.Link href="/componente1"><h4>Componente 1</h4></Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/componente2"><h4>Componente 2</h4></Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/componente3"><h4>Componente 3</h4></Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/componente4"><h4>Componente 4</h4></Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/componente5"><h4>Componente 5</h4></Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/sobre"><h4>Sobre</h4></Nav.Link></Nav.Item>
                </Router>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    </Styles>
)