import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FaReact } from 'react-icons/fa';

function CollapsibleExample(){

	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return (
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
			<Container>
				<Navbar.Brand href="#home"><FaReact />RMCQuick</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="ms-auto">
						<Nav.Link href="#features">Search</Nav.Link>
						<Nav.Link href="#pricing">Help</Nav.Link>
						<Nav.Link href="#pricing">Offers</Nav.Link>

						<Nav.Link href="#pricing">Cart</Nav.Link>

						<Button variant="link" className='Sign-up Button ' onClick={handleShow}>
							Login/Sign Up
						</Button>

						<Offcanvas show={show} placement='end' onHide={handleClose}>
							<Offcanvas.Header closeButton>
								<Offcanvas.Title>Login/Sign Up</Offcanvas.Title>
							</Offcanvas.Header>
							<Offcanvas.Body>
								Some text as placeholder. In real life you can have the elements you
								have chosen. Like, text, images, lists, etc.
							</Offcanvas.Body>
						</Offcanvas>


					</Nav>

				</Navbar.Collapse>
			</Container>
		</Navbar >
	);
}

export default CollapsibleExample;