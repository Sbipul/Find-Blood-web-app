import React from 'react';
import { Container, Form, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import { FaFacebook,FaPhoneAlt,FaWhatsapp } from "react-icons/fa";

const Header = () => {
    return (
        <div>
            <div className="darK py-2 text-light">
                <Container>
                    <div className="d-flex justify-content-between">
                        <div>
                            <p className=" p-0 m-0">Develper details</p>
                        </div>
                        <div className="text-end">
                            <a style={{cursor:'pointer',color:'white'}} href="https://www.facebook.com/uzzalkumar.roy.967/" className="mx-2"><FaFacebook/></a>
                            <a className="mx-2" style={{cursor:'pointer',color:'white'}} href={`tel:01774075640`}><FaPhoneAlt/></a>
                            <a className="ms-2" style={{cursor:'pointer',color:'white'}} href={`tel:01954443121`}><FaWhatsapp/></a>
                        </div>
                    </div>
                </Container>
            </div>
            <Navbar  className="py-5 text-center footer" variant="dark" expand="lg">
            <Container>
            <Navbar.Brand href="#">সৌভিক ছাত্রাবাস</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav
                className="ms-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
                >
                <Nav.Link as={HashLink} className="fs-5 text-light border-end" to="/home#home">হোম</Nav.Link>
                <Nav.Link as={HashLink} className="fs-5 text-light border-end" to="/all">সকল সদস্য</Nav.Link>
                <Nav.Link as={HashLink} className="fs-5 text-light border-end" to="/about">বিস্তারিত</Nav.Link>
                <Nav.Link as={HashLink} className="fs-5 text-light" to="/admin">এডমিন</Nav.Link>
                </Nav>
                <Form className="d-flex">
                </Form>
            </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
    );
};

export default Header;