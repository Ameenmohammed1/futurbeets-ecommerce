import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
    //   display: true,
     
    },
  },
};

const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sun', 'Sat'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Customers',
      data:[75,25,44,33,64,25,57,78],
      backgroundColor: 'rgba(53, 162, 235)',
    },
  ],
};
 function BarChart() {
  return <Bar options={options} data={data} />;
}

export default BarChart