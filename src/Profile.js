import './App.css';
import React from 'react'
import imgprofile from './profile.jpg'
import iconirancell from './iranicon.png'
import { IoMailOutline,IoWifi } from "react-icons/io5";
import Remaincharge from './Remaincharge'
function Profile() {
  return (
    <React.Fragment>
    <div className="profile">
      
  <img src={imgprofile} className="circle"/>
        
   <h4 className="profilename">Wellcome!</h4>
    <p>09354123789</p> 
    </div>
    <div className="profilecharge">
    <div className="remaincharge stylall">
    <h4 className="h4p">شارژ باقی مانده سیم کارت</h4>
    <Remaincharge/>
    <button className="charge"> !سیم کارتت رو شارژ کن</button>
    </div>

   <div className="servic stylall">
    <h4 className="h4p">  خدمات فعال</h4> 
    
    <p><span><IoMailOutline color="yellow"size="25px" className="icon-backg"/></span>بسته پیامک هفتگی</p><p>تا تاریخ 31خرداد1400</p>
     <p> <span><IoWifi color="yellow" size="25px" className="icon-backg"/></span>بسته اینترنت ماهانه</p><p>تا تاریخ 12خرداد1400</p>
   </div>
   <div className="followapp" >
     <img src={iconirancell}  className="applicationClick"/>
     <p className="follow"> !اپلیکیشن مارو دنبال کن</p>
   </div>
   </div>
  </React.Fragment>
  );
}

export default Profile;
