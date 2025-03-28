import React from 'react'
import { Line } from 'react-chartjs-2';
import {Chart as ChartJS, CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend,} from 'chart.js/auto';
import { LineData } from '../StudentData/LineData';
ChartJS.register(CategoryScale,LinearScale,PointElement,LineElement,Tooltip,Title,Legend);

const LineGraph = () => {
const options ={
    elements :{
        Line:{
          tension:0.5
        }
    }
};

  return (
    <div>
        <Line options={options}  data ={LineData} />
    </div>
  )
}
export default LineGraph