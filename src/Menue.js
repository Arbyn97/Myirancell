import './App.css';
import React from 'react'
import iconirancell from './iranicon.png'
import { ImHome,ImQuestion } from "react-icons/im";
import { IoIosAddCircle,IoIosStats,IoIosContacts } from "react-icons/io";
import { GrAid,GrSort,GrRss,GrUserManager } from "react-icons/gr";
function Menue() {
  return (
    <React.Fragment>
        <div className="appname" >
       <img className="icon" src={iconirancell}/>
            <h5> ایرانسل من</h5>
       </div>
    <div >
      <input type="search" placeholder="جستجو"className="search" />
    </div>
    <br/>
    <div className="items">
      <div ><p className="home"><span><ImHome color="yellow"/></span>صفحه اصلی</p></div>
      <div><p className="label">سرویس ها</p> 
      <p className="margintop-menu"><span><IoIosAddCircle/></span>شارژ سیم کارت</p>
      <p className="margintop-menu"><span><GrRss/></span>اینترنت</p>
      <p className="margintop-menu"><span><IoIosStats/></span>کارکرد و فروش</p>
      <p className="margintop-menu"><span><GrAid/></span>خدمات</p>
      </div>
      <div><p className="label">مدیریت</p>
      <p className="margintop-menu"><span><GrSort/></span>مدیریت خدمات</p>
      <p className="margintop-menu"><span><GrUserManager/></span>مدیریت سیم کارت</p>
      </div>
      <div>
      <p className="margintop-menu"><span><ImQuestion/></span>سوالات متداول</p>
      <p className="margintop-menu"><span><IoIosContacts/></span>ارتباط با ما</p>
      </div>
   

    </div>
    
  </React.Fragment>
  );
}

export default Menue;
