import React from 'react'
import { Bar } from 'react-chartjs-2';
import {Chart as ChartJS, CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend,} from 'chart.js/auto';
import BarData from '../StudentData/BarData';
ChartJS.register(CategoryScale,LinearScale,PointElement,LineElement,Tooltip,Title,Legend);

const BarGraph = () => {
const options ={};

  return (
    <div>
        <Bar options={options}  data ={BarData} />
    </div>
  )
}
export default BarGraph