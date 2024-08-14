import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PoweroffOutlined, MoneyCollectOutlined } from '@ant-design/icons'; // Import the icons
import { Link,Outlet } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import "./userstyle.css"
const UserDashBoard = () => {
  const [username, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');

  const navigate = useNavigate();

  const logout = () => {
    // Clear localStorage and navigate to login page
    window.localStorage.clear();
    navigate('/');
  };

  useEffect(() => {
    const usrname = window.localStorage.getItem('userName');
    const usremail = window.localStorage.getItem('userEmail');

    setUserName(usrname);
    setUserEmail(usremail);
  }, []);

  return (
    <>
    <div className="dash_header">
      <span id="logo"><MoneyCollectOutlined /></span> <h1 id="lotext">Expense Manager<span>.com</span></h1>
      <div className="right-section">
        <h1>Welcome: {username}</h1>
        <h2>User ID: {userEmail}</h2>
        <button onClick={logout} className="header-btn"><PoweroffOutlined /> Logout</button>
      </div>
    </div>

        {/* for menu and all options */}
        <div className="menu">
          <Nav defaultActiveKey="/home" className="flex-column" >
            <Nav.Link as={Link} to="wages">Wages</Nav.Link>
            <Nav.Link as={Link} to="savings">Savings</Nav.Link>
            <Nav.Link as={Link} to="expense">Expense</Nav.Link>
            <Nav.Link as={Link} to="displaywages">Total Fund</Nav.Link>
        </Nav>
          </div>
        
      <Outlet/>
    </>
  );
};

export default UserDashBoard;
