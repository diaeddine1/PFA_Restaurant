  

import React from "react";
import tinder from "../Images/tinder.png"
function DropMenu()
{

  return(
    
      <div className="menu">

        <li className="logo"><span className="ea">EA</span><img src={tinder}/></li>
        <a href="/"> 
          <li className="home" style={{fontFamily: 'Pacifico, cursive'}}>Home</li>
        </a>
          
          
        <a href="/Restaurants"> 
          <li className="resto" style={{fontFamily: 'Pacifico, cursive'}}>Restaurant</li>
        </a> 
        
        <a href="/AboutUs" className="info" style={{fontFamily: 'Pacifico, cursive'}}>About Us</a>
        

      
      </div>


  )
}

export default DropMenu;