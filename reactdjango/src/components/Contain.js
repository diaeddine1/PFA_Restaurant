
import React from 'react'
import Data from "./Data";
export default function Contain(props) {
  const image=props.nom;
  console.log(image)

  
  return (
    <div className='contain'>
        <li><img src={props.img} /></li>
        <li>{props.nom}</li>
        
       

        <li>{props.des}</li>
        <li>{props.adresse}</li>
    
    
    </div>

  )
  
       
  
}
