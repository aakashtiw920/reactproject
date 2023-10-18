import React from 'react';
import './Verticalnavbar.css'
import * as img from './imagevalue.js'
const Verticalnavbar = () => {
  return (
    
    <div>
        <ul class="text-white p-10 font-mono">
        <h1 class="mb-8 font-sans text-xl"><img src={img.dashboardmain} className="logo"></img>Dashboard</h1>
          <h2 class="mb-5 font-sans text-l"><img src={img.dashboard} className="logo"></img>Dashboard</h2>
            <li  class="flex mb-5 font-sans text-xs "><img src={img.product} className="logo"></img><a href="/product">Product <span className='arrowattr'>></span></a></li>
            <li class="mb-5 font-sans text-xs"><img src={img.customer} className="logo"></img><a href="/customer">Customers<span className='arrowattr1'>></span></a></li>
            <li class="mb-5 font-sans text-xs"><img src={img.income} className="logo"></img><a href="/income">Income<span className='arrowattr2'>></span></a></li>
            <li class="mb-5 font-sans text-xs"><img src={img.discount} className="logo"></img><a href="/promote">Promote<span className='arrowattr3'>></span></a></li>
            <li class="mb-5 font-sans text-xs"><img src={img.help} className="logo"></img><a href="/help">Help</a></li>
            </ul>
        <div class="profile">
          <img src={img.profile} alt="photo" className='profileimage'></img>
          <div className='groupdetails'>
                <h4 className='profilename'>Mikasa</h4>
              <h5 className='profiledetail'>Project Manager</h5>
              <span className="arrow">🢓</span>
          </div>
        </div>
        
    </div>
  );
};
export default Verticalnavbar;

