import { useState, useEffect } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';

const Report=()=>{
    const [uid, setUid]= useState("");
    const [startDate, setStartDate]= useState("");
    const [endDate, setEndDate]= useState("");
    const [myData1, setMydata1]= useState([]);
    const [myData2, setMydata2]=useState([]);

    useEffect(()=>{
        let myid= window.localStorage.getItem("userid");
        setUid(myid);
    }, [])

    const handleSubmit=async()=>{
        let api="http://localhost:8000/wages/showreport";
        const res=await axios.post(api, {startdate:startDate, enddate:endDate, id:uid})
        setMydata1(res.data.myData1);
        setMydata2(res.data.myData2);
    }

  let sno=0;
  let totalEarning=0;
  const ernData=myData1.map((key)=>{
     sno++;
     totalEarning+=key.amount;
    return(
        <>
          <tr>
            <td> {sno}</td>
            <td> {key.source} </td>
            <td> {key.date} </td>
            <td> {key.amount} </td>
          </tr>
        </>
    )
  })

  let sno1=0;
  let totalExpenses=0
  const expData=myData2.map((key)=>{
       sno1++;
       totalExpenses+=key.amount;
    return(
        <>
          <tr>
            <td> {sno1} </td>
            <td> {key.decription} </td>
            <td> {key.date} </td>
            <td> {key.amount} </td>
          </tr>
        </>
    )
  })

    return(
        <>
       <div className="div">
       <h1> Display user Report</h1>
          Enter Start Date : <input type="date" value={startDate} 
         onChange={(e)=>{setStartDate(e.target.value)}} /> 
         Enter End Date : <input type="date" value={endDate} 
         onChange={(e)=>{setEndDate(e.target.value)}} />
         <button onClick={handleSubmit}>Search</button>
         <hr size="3" />

         <h3 style={{color:"green"}}> Total balance: {totalEarning-totalExpenses<0?<span style={{color:"red"}}>{totalEarning-totalExpenses} </span>:totalEarning-totalExpenses}</h3>
        
        
        
         <div id="reportdata" style={{display:"flex" , marginTop:"25px",gap:"60px" }}>
           
           <div id="earning data " style={{marginLeft:"-250px"}}>
        
            <Table striped bordered hover >
            
             
                              <thead>
                              <h2>Earning Data</h2>
                              <hr size="5"color="green" />
                                <tr>
                                  <th>#</th>
                                  <th>Source</th>
                                  <th>Date</th>
                                  <th>Amount</th>
                                </tr>
                              </thead>
                              <tbody>
                                  {ernData}
                                  <tr>
                                    <th colspan="3"> Total Earning Amount: </th>
                                    <th>{totalEarning}</th>
                                  </tr>
                                </tbody>
            </Table>

          </div>



            {/* fot expesne tabele */}
            <div style={{marginTop:"0px"}}>
         
            <Table striped bordered hover>
            
      <thead>
      <h2> Expenses Data</h2>
      <hr size="3" color="red"/>
        <tr>
          <th>#</th>
          <th>Description</th>
          <th>Date</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
          {expData}
          <tr>
            <th colspan="3"> Total Expenses Amount: </th>
            <th>{totalExpenses}</th>
          </tr>
        </tbody>
        </Table>
            </div> 
         </div>
       </div>
        </>
    )
}

export default Report;
