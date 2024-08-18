
import Button from 'react-bootstrap/Button';
import '../App.css'
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { message } from "antd";
import { MoneyCollectOutlined } from '@ant-design/icons';
import axios from "axios"
import { Navigate, useNavigate } from 'react-router-dom';
import Password from 'antd/es/input/Password';



const Home = () => {
    const [show, setShow] = useState(false);

    const[forgot , setForgot] = useState(false)

    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);

    // const handleClosemsg = () => {
    //     setShow(false);
    //     message.success("Account Created Successfully", [5])
    // }



    // ------------------------------------------------------------------
    //for login of registered user using email and pasword

    const[loginInputemail , setloginemail] = useState({})

    const[loginInputpass , setloginpass] = useState("")

    const  navigate = useNavigate()
    const checkUser = async (e) => {
        e.preventDefault();
        let api = "http://localhost:8000/customer/customercheck";
        
        try {
          const res = await axios.post(api, { email: loginInputemail, password: loginInputpass });
          console.log(res.data.name);
          window.localStorage.setItem("userName", res.data.name);
          window.localStorage.setItem("userEmail", res.data.email);
        //   to ge the userobject id from backend
        console.log( res.data._id)
          window.localStorage.setItem("userid", res.data._id);
          navigate("/dashboard");
          message.success("Logged in !!",[5])
        } catch (error) {
          console.error("Error checking user:", error.response.data);
          message.error("email or password not valid")
          // You can also display an error message to the user here, if needed
        }
      };
      
  // -------------------------------------------------------------------

    // for forgot password

    const handleForgotshow=()=>setForgot(true)
    const handleForgotclose=()=>setForgot(false)
    const handleForgotMSg=()=>{
        setForgot(false)
        message.success("Otp Sent Successfully",[3])
    }

    // for input handling of the new registartion 
        const[inputSign , inputSignInput] = useState({})

    const handleInput = (e)=>{
        let name = e.target.name

        let value = e.target.value 

        inputSignInput(values=>({...values ,[name]:value}))

        console.log(inputSign)


    }

    const handleInputSubmit=()=>{
        let api = "http://localhost:8000/customer/customersave"

        axios.post(api,inputSign).then((res)=>{
            console.log(res)
            setShow(false);
            message.success("Account Created Successfully", [5])
        })
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

                                    {/* for name */}
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="name"
                                        autoFocus
                                        onChange={handleInput}
                                        
                                        
                                    />
                                </Form.Group>
                                {/* mail */}
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="name@example.com"
                                        name="email"
                                        onChange={handleInput}
                                    />
                                </Form.Group>

                                {/*password  */}

                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        name="password"
                                        onChange={handleInput}
                                       
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Verify New Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        name="vpassword"
                                        onChange={handleInput}
                                        
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="city"
                                        onChange={handleInput}
                                        
                                    />
                                </Form.Group>
                             
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={ handleInputSubmit}>
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


                    {/*login front page  */}


                    <Form className="login-form">
                                <h3 style={{marginTop:-29 , textAlign:"center" ,fontSize:25}}>Sign in</h3>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>
                                <h6>Email address</h6>
                            </Form.Label>
                            <Form.Control type="email" 
                            placeholder="Enter email"  
                            name="email"
                            onChange={(e)=>setloginemail(e.target.value)}/>
                           
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label><h6>Password</h6></Form.Label>
                            <Form.Control type="password" 
                            placeholder="Password" 
                            name ="password" 
                            onChange={(e)=>setloginpass(e.target.value)}/>
                        </Form.Group>

                        <Button variant="primary" type="submit" style={{width:420 , marginTop:10}} onClick={checkUser}>
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
