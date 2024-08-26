import React, { useEffect, useState } from 'react'
import axios from "axios"
const Report = () => {
  const[uid , setUid] = useState("");
  const[startdate , setSdate] = useState("");
  const [enddate , setEdate] = useState("");

  useEffect(()=>{

    let myid = window.localStorage.getItem("userid")
    setUid(myid)

  },[])
  
  const handleSubmit=()=>{
      let api =  "http://localhost:8000/wages/showreport"
      axios.post(api,{id:uid,startdate:startdate,enddate:enddate}).then((res)=>{
        console.log("this god damn shit is working")
      })

  }
 
  return (
    <>
    

          
    </>
  )
}

export default Report
