import React from 'react'
import './App.css';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
function Remaincharge() {
    ChartJS.register(ArcElement, Tooltip, Legend);

 const data = {
 
  
  datasets: [
    {
    
      data: [80, 20],
      backgroundColor: [
        'rgb(248, 230, 66)',
        'rgb(237, 236, 230)',
      ],
      borderColor: [
        'rgb(248, 230, 66)',
        'rgb(237, 236, 230)',
      ],
      borderWidth:1,
      
    },
  ],
};
  return (
    <React.Fragment>
    <div className="recharge">
      
  



<Doughnut data={data} />
<h4 className="donught">6000 تومان</h4>

   </div>
  </React.Fragment>
  );
}

export default Remaincharge;
