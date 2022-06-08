import './App.css';
import React from 'react'
import Categories from'./Categories'
import Menue from './Menue'
import Profile from './Profile'
function App() {
  return (
    <React.Fragment>
    <div className="App prle">
      <Profile/>
    </div>
     <div className="App ctgy">
    <Categories/>
   </div>
    <div className="App mnu">
    <Menue/>
  </div>
  </React.Fragment>
  );
}

export default App;
