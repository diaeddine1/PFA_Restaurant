

import React from 'react'
import { BsClock } from "react-icons/bs";
export default function Etat(props) {
    const etat=props.etat
    if(etat && etat.includes("Open now"))
    {
  return (
    
    <p>
    <span style={{fontSize:"25px",color:"#5EAC1B",padding:"10px"}}>  <BsClock/></span> <span style={{fontSize:"20px",fontWeight:"bold",color:"#5EAC1B"}}> {props.etat}    </span>
    </p>
  )
}
  else
  {
    return (
        <p>
        <span style={{fontSize:"25px",color:"crimson",padding:"10px"}}>  <BsClock/></span> <span style={{fontSize:"20px",fontWeight:"bold",color:"crimson"}}> {props.etat}    </span>
        </p>
    )
  }
}
