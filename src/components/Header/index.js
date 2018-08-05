import React from 'react';
import {
    Navbar,
    Nav,
    NavItem,
    NavDropdown,
    MenuItem,
    FormGroup,
    InputGroup,
    FormControl,
} from 'react-bootstrap';
import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                    <Link to="/">
                        <img src={logo} alt="Logo" width="20px" />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav pullRight>
                    <NavItem eventKey={1} href="#">
                        <i className="fa fa-shopping-basket" />
                    </NavItem>
                    <NavItem eventKey={1} href="#">
                        <NavDropdown eventKey={3} title="Ingresar" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1}>Login User</MenuItem>
                            <MenuItem eventKey={3.2}>Login Seller</MenuItem>
                        </NavDropdown>
                    </NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;
