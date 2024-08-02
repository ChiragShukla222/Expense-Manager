import React from 'react';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { message } from "antd";
import { MoneyCollectOutlined } from '@ant-design/icons';



const Home = () => {
    const [show, setShow] = useState(false);

    const[forgot , setForgot] = useState(false)

    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);

    const handleClosemsg = () => {
        setShow(false);
        message.success("Account Created Successfully", [5])
    }

    

    // for forgot password

    const handleForgotshow=()=>setForgot(true)
    const handleForgotclose=()=>setForgot(false)
    const handleForgotMSg=()=>{
        setForgot(false)
        message.success("Otp Sent Successfully",[3])
    }

    return (
        <>
            <div className="homepage">

                {/* header for logo and compnay name */}
                <div className="home_header">
                    <span id="logo"><MoneyCollectOutlined /></span>
                    <h1>Expense Manager<span>.com</span></h1>
                </div>



                    {/* Button inside the header */}
                    {/* <Button className="header-btn" variant="primary" onClick={handleShow}>
                        Register !
                    </Button> */}


                            {/* modal for signup */}

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Create Account</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                                <div className="password_require_fields">
                                        <span>Password Requirements:</span>
                                        <ul>
                                                <li>An alphabetic character</li>
                                                <li>A minimum of 8 characters</li>
                                                <li>A numeric character</li>
                                                <li>A special character</li>
                                                <li>A lowercase character</li>
                                                <li>An uppercase character</li>
                                        </ul>


                                </div>
                            <Form>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="name@example.com"
                                        autoFocus
                                    />
                                </Form.Group>

                                {/*password  */}

                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                       
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Verify New Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        
                                    />
                                </Form.Group>
                             
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={handleClosemsg}>
                                Create Account
                            </Button>
                            
                        </Modal.Footer>
                    </Modal>

                    {/* enddndndn */}


                    {/* for forgot pass word */}
                    <Modal show={forgot} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Create Account</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                                
                            <Form>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Enter registered Email address</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="name@example.com"
                                        autoFocus
                                    />
                                </Form.Group>

                            
                             
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleForgotclose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={handleForgotMSg}>
                                Get Otp
                            </Button>
                            
                        </Modal.Footer>
                    </Modal>

                

                {/* Centered form container */}
                <div className="centered-form">


                    {/*  */}
                    <Form className="login-form">
                                <h3 style={{marginTop:-29 , textAlign:"center" ,fontSize:25}}>Sign in</h3>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>
                                <h6>Email address</h6>
                            </Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                           
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label><h6>Password</h6></Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Button variant="primary" type="submit" style={{width:420 , marginTop:10}}>
                            Sign in
                        </Button>
                        <br />


                        {/*  */}


                        <p style={{marginTop:"25px" ,textAlign:"center"}}>Don't have an account yet? <a href="#" onClick={handleShow} style={{textDecoration:"none"}}>Sign up</a> Here</p>
                        <p style={{textAlign:"center"}}><a href="#" style={{textDecoration:"none"}} onClick={handleForgotshow}>Forgot Password ?</a></p>



    
                    </Form>
                </div>

                <div className="foooterfor_home">
                    {/* <hr style={{ color: "green", border: "4px solid green" }} /> */}
                    <h6>Tired of tracking expenses, Don't worry we got you</h6>
                    <p>www.ExpenseManager.com</p>

                </div>
            </div>
        </>
    );
};

export default Home;
