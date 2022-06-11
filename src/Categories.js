import './App.css';
import React from 'react'
import images from'./bnr.png'
import ChartLine from'./ChartLine'
import TableOfPackets from'./TableOfPackets'


function Categories() {
   
    
   
  
    
  return (

    <React.Fragment>
        <div className="category">
        <p className="mainpagep">
            صفحه اصلی
        </p>
        
   
    <img src={images} className="banner"/>
    
    <div className="chart">
        <h3>نمودار میزان مصرف کل
    </h3>
    <ChartLine/>
    </div>
    <div className="table">
        <h3>        جدول بسته های پیشنهادی
    </h3>
  <TableOfPackets/>
    </div>
        </div>
       
    
  </React.Fragment>
  );
}

export default Categories;
