import React, { useEffect, useState } from 'react';
import axios from "axios";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Saving = () => {
    const [mdata, setData] = useState([]);
    const [userid, setUserid] = useState();

    useEffect(() => {
        let usrid = window.localStorage.getItem("userid");
        setUserid(usrid);
    }, []);

    useEffect(() => {
        if (userid) {
            loaddata();
        }
    }, [userid]);

    const loaddata = () => {
        let api = "http://localhost:8000/wages/displayexpense";

        axios.post(api, { id: userid })
            .then((res) => {
                console.log('API response:', res.data);
                if (Array.isArray(res.data)) {
                    setData(res.data);
                } else {
                    console.error('API response is not an array:', res.data);
                }
            })
            .catch((err) => {
                console.error("Error loading data:", err);
            });
    };

    return (
        <>
            <h1>Display the expenses here</h1>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Amount</TableCell>
                            <TableCell>Description</TableCell>
                            <TableCell>Date</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Array.isArray(mdata) && mdata.map((row, index) => (
                            <TableRow
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell>{row.amount}</TableCell>
                                <TableCell>{row.description}</TableCell>
                                <TableCell>{row.date}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}

export default Saving;
