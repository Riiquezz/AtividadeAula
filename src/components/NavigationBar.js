import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import logo from '../assets/logo.jpg';

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
            <img
                alt=""
                src="../assets/logo.jpg"
                width="30"
                height="30"
                className="d-inline-block align-top"
            />
            {"Pomatti's site!"}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="baisc-navbar-nav">
            <Nav className="ml-auto">
                <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/componente1">Componente 1</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/componente2">Componente 2</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/componente3">Componente 3</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/componente4">Componente 4</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/componente5">Componente 5</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/sobre">Sobre</Nav.Link></Nav.Item>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    </Styles>
)