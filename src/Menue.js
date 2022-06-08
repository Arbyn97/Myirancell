import './App.css';
import React from 'react'

function Menue() {
  return (
    <React.Fragment>
        <div className="appname" >
            <div className="icon"></div>
            <h5>ایرانسل من</h5>
        </div>
    <div className="search">
      <input type="search" placeholder="جستجو" />
    </div>
    
  </React.Fragment>
  );
}

export default Menue;
