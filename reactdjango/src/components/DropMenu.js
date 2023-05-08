  

  import React from "react";
  
  function DropMenu()
    {
      return(
          <div className="menu">

            <li className="logo"><span className="ea">EA</span><img src="tinder.png"/></li>
            <a href="/"> 
             <li className="home">Home</li>
             </a>
             <a href="/Restaurants"> 
             <li className="resto">Restaurant</li>
             </a> 
             <a href="/AboutUs" className="info">About Us</a>
             

         
          </div>
  
  
      )
    }
  
    export default DropMenu;