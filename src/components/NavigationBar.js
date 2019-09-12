import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import logo from '../assets/logo.png';
import Image from 'react-image-resizer';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Styles = styled.div`
    .navbar {
        background-color: #222;
    }

    .navbar-brand, .navbar-nav .nav-link {
        color: #bbb;

    &:hover{
        color: white;
    }
    .teste {
        color: white;
    }
    .corBotao {
        color: black;
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
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="baisc-navbar-nav">
                <Nav className="ml-auto">

                    <Button variant="outline-light"><Nav.Link><Link to="/" className="teste"><h5>Home</h5></Link></Nav.Link></Button>
                    <Button variant="outline-light"><Nav.Link><Link to="/componente1" className="teste"><h5>Componente 1</h5></Link></Nav.Link></Button>
                    <Button variant="outline-light"><Nav.Link><Link to="/componente2" className="teste"><h5>Componente 2</h5></Link></Nav.Link></Button>
                    <Button variant="outline-light"><Nav.Link><Link to="/componente3" className="teste"><h5>Componente 3</h5></Link></Nav.Link></Button>
                    <Button variant="outline-light"><Nav.Link><Link to="/componente4" className="teste"><h5>Componente 4</h5></Link></Nav.Link></Button>
                    <Button variant="outline-light"><Nav.Link><Link to="/componente5" className="teste"><h5>Componente 5</h5></Link></Nav.Link></Button>
                    <Button variant="outline-light"><Nav.Link><Link to="/sobre" className="teste"><h5>Sobre</h5></Link></Nav.Link></Button>
                    
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)