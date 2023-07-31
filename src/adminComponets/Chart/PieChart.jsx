import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Products', 'Out of stoch', 'Hide Products'],
  datasets: [
    {
      label: '',
      data: [30, 19, 3],
      backgroundColor: [
        'rgba(255, 99, 132)',
        'rgba(54, 162, 235)',
        'rgba(255, 206, 86)',
      ],
      borderColor: [
        '#fff',
        '#fff',
        '#fff',
        
      ],
      borderWidth: 1,
    },
  ],
};

 function PieChart() {
  return <Pie id='lineChart' data={data} />;
}


export default PieChart