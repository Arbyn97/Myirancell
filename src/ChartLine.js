import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
  import { faker } from '@faker-js/faker';
  function ChartLine() {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
      );
      
       const options = {
        responsive: true,
        plugins: {
          legend: {
           
          },
          title: {
            display: true,
           
          },
        },
      };
      
      const labels = ['7/1', '7/10', '7/18', '7/25', '7/28'];
     
       const data = {
          
        labels,
        datasets: [
          {
            label: 'تومان',
            data: labels.map(() => faker.datatype.number({ min: 1000, max: 4000 })),
            borderColor: 'rgb(248, 230, 66)',
            backgroundColor: 'rgb(248, 230, 66)',
          },
        
        ],
      };
    return (
      <React.Fragment>
          <div className="chartdiv" >
           <Line options={options} data={data} />
  
      </div>
      
    </React.Fragment>
    );
  }
  
  export default ChartLine;