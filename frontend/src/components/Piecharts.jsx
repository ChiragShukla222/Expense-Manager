import React, { useEffect, useState } from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import axios from 'axios';

const Piecharts = () => {
  const [wages, setWages] = useState(0);
  const [expense, setExpense] = useState(0);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const uid = window.localStorage.getItem("userid");
    if (uid) {
      setUserId(uid);
    }
  }, []);

  useEffect(() => {
    if (userId) {
      loadData();
    }
  }, [userId]);

  const loadData = async () => {
    try {
      const api = "http://localhost:8000/wages/piechart";
      const response = await axios.post(api, { id: userId });
      const { expData, wageData } = response.data;
      
      const totalExpense = expData.reduce((acc, curr) => acc + curr.amount, 0);
      const totalWages = wageData.reduce((acc, curr) => acc + curr.amount, 0);

      setExpense(totalExpense);
      setWages(totalWages);
    } catch (error) {
      console.error("Error loading data:", error);
    }
  };

  const difference = wages - expense;

  return (
    <PieChart
      series={[
        {
          data: [
            { id: 0, value: expense, label: 'Expense' },
            { id: 1, value: wages, label: 'Wages' },
            { id: 2, value: difference, label: 'Difference' },
          ],
        },
      ]}
      width={400}
      height={200}
    />
  );
};

export default Piecharts;
