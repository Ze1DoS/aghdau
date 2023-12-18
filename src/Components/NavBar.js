import React from 'react';
import {Nav, Navbar, Dropdown, Button, ButtonGroup, NavLink} from "react-bootstrap";
import DropMenu from "./DropMenu";
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <Navbar bg={'light'} className={'p-3'} expand={'lg'}>
                <Nav.Item className={'ms-3'}>
                    <Dropdown as={ButtonGroup}>
                        <Dropdown.Toggle bsPrefix={'d-flex rounded '} variant={'light'}>
                            <Navbar.Brand><h3 className={'ms-2 text-success fs-4'}>Æгъдау</h3></Navbar.Brand>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className={'w-auto ps-3 pe-3'}>
                            <DropMenu />
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav.Item>
                <Navbar.Toggle />
                <Navbar.Collapse id={'basic-navbar-nav'}>
                    <Nav className={'justify-content-center flex-fill fs-5'}>

                        <Nav.Item style={{cursor:'pointer'}} className={'mx-3'}><Link className={'text-decoration-none text-dark'} to={'/main'}>Главная</Link></Nav.Item>
                        <Nav.Item style={{cursor:'pointer'}} className={'mx-3'}><Link className={'text-decoration-none text-dark'} to={'/whatis'}>Æгъдау</Link></Nav.Item>
                        <Nav.Item style={{cursor:'pointer'}} className={'mx-3'}><Link className={'text-decoration-none text-dark'} to={'/pies'}>Осетинские пироги</Link></Nav.Item>
                        <Nav.Item style={{cursor:'pointer'}} className={'mx-3'}><Link className={'text-decoration-none text-dark'} to={'/about'}>Связь</Link></Nav.Item>
                    </Nav>
                    <Dropdown className={'me-2'}>
                        <Dropdown.Toggle variant={'light'}>RU</Dropdown.Toggle>
                        <Dropdown.Menu className={'mw-auto'} variant={'light'}>
                            <Dropdown.Item>EN</Dropdown.Item>
                            <Dropdown.Item>RU</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Button className={'me-5 bi bi-moon-fill'} variant={'light'}></Button>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default NavBar;