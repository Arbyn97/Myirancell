import './App.css';
import React from 'react'
import {Table,Column,Cell} from 'fixed-data-table-2'
import 'fixed-data-table-2/dist/fixed-data-table.css';
function Categories() {
    const row=[1,2,3];
  return (

    <React.Fragment>
        <div className="category">
        <p>
            صفحه اصلی
        </p>
        
    <div className="banner">
     <h2>!این همه بسته بی سابقه است</h2>
     <button className="bannerBTN">!اینجا چه خبره</button>
    </div>
    <div className="chart">
        <h3>نمودار میزان مصرف کل
    </h3>
    </div>
    <div className="table">
        <h3>        جدول بسته های پیشنهادی
    </h3>
   
<Table height="50px" rowHeight={50}>
    <Column
    header={<cell>expire</cell>}
    cell={}
    width={}
    />

</Table>
    
    </div>
        </div>
       
    
  </React.Fragment>
  );
}

export default Categories;
