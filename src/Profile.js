import './App.css';
import React from 'react'

function Profile() {
  return (
    <React.Fragment>
    <div className="profile">
        <div className="circle">

        </div>
   <h4 className="profilename">hello ahmadpanah</h4>  
    </div>
    <p>09354123789</p>
    <div className="remaincharge stylall">
    <h4 className="h4p">شارژ باقی مانده</h4>
    </div>
   <div className="servic stylall">
    <h4 className="h4p">  خدمات فعال</h4> 
   </div>
  </React.Fragment>
  );
}

export default Profile;
