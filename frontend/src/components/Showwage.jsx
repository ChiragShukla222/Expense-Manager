import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../components/tab.css"


const Showwage = () => {

  const [mydata, setMyData] = useState([]);
  const [userid, setUserId] = useState();

  useEffect(() => {
    let userid = window.localStorage.getItem("userid");
    setUserId(userid);
  }, []);

  useEffect(() => {
    if (userid) {
      loaddata();
    }
  }, [userid]);

  const loaddata = () => {
    let api = "http://localhost:8000/wages/showwages";

    axios.post(api, { id: userid })
      .then((res) => {
        console.log(res.data);
        setMyData(res.data);  // Store only the data, assuming it's an array
      })
      .catch((err) => {
        console.error("Error loading data:", err);
      });
  }

  let sno = 1;  // Initialize sno outside of the map function
  let totalamount = 0;  // Initialize totalamount outside of the map function

  const ans = mydata.map((item) => {
    totalamount += item.amount;  // Accumulate the total amount
    return (
      <tr key={sno}>
        <td>{sno++}</td>  
        <td>{item.source}</td>
        <td>{item.date}</td>
        <td>{item.amount}</td>
      </tr>
    );
  });

  return (
    <>
          <h1>Show Total Earnings</h1>
       <table>
       <tr>
          <td>sno</td>
          <td>Source</td>
          <td>Date</td>
          <td>Amount</td>
        </tr>
        {ans}
       </table>
       <tr>
        TOTAL AMOUNT :{totalamount}
       </tr>

    </>
  );
}

export default Showwage;
