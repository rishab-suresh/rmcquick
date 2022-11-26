import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FaHandsHelping, FaReact } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { MdManageAccounts } from "react-icons/md";
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
					<Nav className="ms-auto links">
						<Nav.Link href="#Search" > <i><FaSearch/></i>Search</Nav.Link>
						<Nav.Link href="#Help"><Link to='/Help'> <i><FaHandsHelping/></i> Help </Link></Nav.Link>
						<Nav.Link href="#Offers"><Link to='/Offers'> Offers </Link></Nav.Link>

						<Nav.Link href="#pricing">Cart</Nav.Link>

						<Button variant="btn btn-outline-light" className='Sign-up Button' onClick={handleShow}> <i> <MdManageAccounts/></i>User </Button>

						<Offcanvas  show={show} placement='end' onHide={handleClose}>
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