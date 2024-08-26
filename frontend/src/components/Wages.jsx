import React from 'react'
import{useState ,useEffect} from"react"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios"
import "./wagestye.css"
const Wages = () => {
    const[input , setInput] = useState({} )
    // to get the id of the user
    const [uid, setUid]= useState();
    useEffect(()=>{
      let usrid= window.localStorage.getItem("userid");
      setUid(usrid);
    }, []);
  

    // to get input ifn the form
    const handleInput=(e)=>{
        let name = e.target.name 
         let value = e.target.value

         setInput((values)=>({...values,[name]:value}))

         console.log(input)
        
        }

        const handleSubmit=(e)=>{
           e.preventDefault()

          let api = "http://localhost:8000/wages/wagesave"
          axios.post(api,{...input,id:uid}).then((res)=>{
            
           
                console.log(res)
          })

        }
  return (
    <>
    <div style={{textAlign:"center",paddingRight:"150px",}}>
    <h1>Enter The Wages</h1>
    </div>

    {/* to get the amoutn */}
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

    {/* Income Source Selection */}
    <Form.Group className="mb-3" controlId="formBasicIncomeSource">
      <Form.Label>Select Income Source</Form.Label>
      <Form.Select
        aria-label="Default select example"
        name="source"
        onChange={handleInput}
        value={input.source}
      >
        <option value="">Select Income Source</option>
        <option value="spi">By Spi</option>
        <option value="salary">By Salary</option>
        <option value="rent">By Rent</option>
        <option value="interest">By Interest</option>
        <option value="other">Other Source</option>
        <option value="subsidy">By Subsidy</option>
      </Form.Select>
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

    </>
  )
}

export default Wages
