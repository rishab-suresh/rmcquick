import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Login() {
    return (
        <div>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="email" placeholder="Enter Number" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formOneTimePassword">
                    <Form.Label>OTP</Form.Label>
                    <Form.Control type="Number" placeholder="OTP" />
                </Form.Group>
               
                <Button variant="primary" type="submit">
                    Log In
                </Button>
            </Form>
        </div>
    )
}
