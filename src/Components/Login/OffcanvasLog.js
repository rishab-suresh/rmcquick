import React from 'react'
import { useState } from 'react';
import { Offcanvas,Button } from 'react-bootstrap'
import Login from './Login';

export function OffcanvasLog (){
    const [show, setShow] = useState(false);
   

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <div>
    <Button variant="dark px-3" onClick={handleShow}>Login</Button>
    <Offcanvas show={show} placement='end' onHide={handleClose}>
    <Offcanvas.Header closeButton>
        <Offcanvas.Title>Login</Offcanvas.Title>
    </Offcanvas.Header>
    <Offcanvas.Body>
        <Login/>
        
        
    </Offcanvas.Body>
    </Offcanvas>
    </div>
  )
}



