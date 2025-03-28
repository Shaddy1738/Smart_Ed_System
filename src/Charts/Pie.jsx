import React from 'react'
import { Pie } from 'react-chartjs-2';
import {Chart as ChartJS,Tooltip, Legend, ArcElement} from 'chart.js/auto'
import { PieData } from '../StudentData/PieData';
ChartJS.register(Tooltip,Legend,ArcElement);

const PieChart = () => {
    const options ={};
  return (
    <div>
        <Pie options={options} data ={PieData} />
    </div>
  )
}

export default PieChart