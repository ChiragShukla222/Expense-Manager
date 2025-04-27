import React, { useState, useEffect } from 'react';
import axios from "axios";

const Saving = () => {
  const [mydata, Setmydata] = useState([]);
  const [usid, setUsid] = useState("");

  useEffect(() => {
    const fetchUserId = () => {
      const storedUsid = window.localStorage.getItem("userid");
      if (storedUsid) {
        setUsid(storedUsid);
      } else {
        console.warn('No user ID found in local storage.');
      }
    };

    fetchUserId();
  }, []);

  useEffect(() => {
    if (usid) {
      const loadData = () => {
        const api = "http://localhost:8000/wages/expdisplay";
        axios.post(api, { id: usid })
          .then((res) => {
            Setmydata(res.data);
            console.log(res.data);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
      };

      loadData();
    }
  }, [usid]);

  let sno = 0;
  let totalexp = 0;


  const ans = mydata.map((item) => {
     totalexp = totalexp + item.amount;
    sno++;
    return (
      <tr key={item._id}>
        <td>{sno}</td>
        <td>{item.decription}</td>
        <td>{item.amount}</td>
        <td>{new Date(item.date).toLocaleDateString()}</td>
        {/* <td><button var="danger"> Del</button></td> */}
      </tr>
    );
  });



  return (
    <>
      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Date</th>
            {/* <th>Edit</th> */}
          </tr>
        </thead>
        <tbody>
          {ans}
        </tbody>
                <h1 > Total:{totalexp}</h1>
      </table>
    </>
  );
};

export default Saving;
