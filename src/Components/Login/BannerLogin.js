import React from 'react'
import { Button } from 'react-bootstrap';
import { SiFoodpanda } from "react-icons/si";
import "./BannerLogin.css"
import food from "./foodmainbg.jpg";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const BannerLogin = () => {
    return (
        <div className='container-fluid' id='first-banner'>
            <div className='row'id='mainsection'>
                <div className='login-section  col-lg-7'>
                    <div className='logobuttons'>

                        <i><SiFoodpanda /></i>
                        <div className='buttons'>
                            <div className='buttonlog'>
                                <Button variant="dark px-3">Login</Button>
                            </div>
                            <div className='buttonsign'>
                                <Button variant="dark ">Signup</Button>
                            </div>

                        </div>
                        <div className='Title'>
                            <h1>Order Food from Your Favourite Restaurants Nearby </h1>
                        </div>


                    </div>
                    <div className='searchbar'>
                        <InputGroup className="mb-3">
                            <Form.Control
                                placeholder="Enter Your Location"
                                aria-label="Location"
                                aria-describedby="basic-addon2"
                            />
                            <Button variant="bg.info" id="button-addon2">
                                Button
                            </Button>
                        </InputGroup>

                    </div>
                    <div className='citydescription'>
                        <h3>Popular Cities In Uzbekistan</h3>
                        <ul className='cities'>
                            <li><h6>Tashkent</h6></li>
                            <li><h6>Tashkent</h6></li>
                        </ul>
                        
                            
                    </div>

                </div>
                <div className='login-section-right  col-lg-5'>
                    <img src={food} className="image-fluid foodlogbg"></img>
                    
                </div>

            </div>

        </div>
    )
}

export default BannerLogin