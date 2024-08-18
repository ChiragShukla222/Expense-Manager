import useSelection from 'antd/es/table/hooks/useSelection';
import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import axios from 'axios';
const Expense = () => {
  const [input , setInput] = useState({})
  const[userid , setUserid] = useState("")
  const handleInput=(e)=>{
      let name = e.target.name
      let value = e.target.value
      console.log(value)

      setInput(values=>({...values , [name]:value}))
  }

  useEffect(()=>{
    let userid = window.localStorage.getItem("userid")
    setUserid(userid)

  }),[]

  const handleSubmit=(e)=>{
    e.preventDefault()
    let api = "http://localhost:8000/wages/expensesave"
    axios.post(api,{...input , id:userid}).then((res)=>{
      console.log(res.data)
    })
  }
  return (
    <div className="form-container">
    <Form>
      {/* Amount Input */}
      <Form.Group className="mb-3" controlId="formBasicAmount">
        <Form.Label>Enter Amount</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Amount"
          name="amount"
          onChange={handleInput}
          value={input.amount}
        />
      </Form.Group>
  
      {/* description */}
      <Form.Group className="mb-3" controlId="formBasicIncomeSource">
        <Form.Label>Description</Form.Label>
        <Form.Control
         
         type="text"
         placeholder="Descritption"
         name="decription"
         onChange={handleInput}
         value={input.decription}
    
        />
        
      </Form.Group>
  
      {/* Date Selection */}
      <Form.Group className="mb-3" controlId="formBasicDate">
        <Form.Label>Select Date</Form.Label>
        <Form.Control
          type="date"
          name="date"
          onChange={handleInput}
          value={input.date}
        />
      </Form.Group>
  
      {/* Submit Button */}
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
    </div>
  )
}

export default Expense
