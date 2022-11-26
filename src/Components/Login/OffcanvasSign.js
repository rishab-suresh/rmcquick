import {React,useState} from 'react'
import { Offcanvas,Button } from 'react-bootstrap'
import SignUp from './SignUp';

export default function OffcanvasSign() {
    const [show, setShow] = useState(false);


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <Button variant="dark " onClick={handleShow} >Signup</Button>
            <Offcanvas show={show} placement='end' onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Sign Up</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <SignUp/>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}



