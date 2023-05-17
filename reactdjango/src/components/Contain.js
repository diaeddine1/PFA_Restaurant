import React from 'react';
import { Link } from 'react-router-dom';
import { GiPositionMarker } from 'react-icons/gi';

export default function Contain(props) {
 

  return (
    <div className='contain'>
    <Link to={`/Details/${props.nom}` }>
 
        <li>
          <img src={props.img} />
        </li>
        <li>{props.nom}</li>
        
        <li className='addresse' style={{fontWeight:"normal"}}>
          <GiPositionMarker style={{color:'crimson',fontSize:'30px'}}/>
          {props.adresse}
        </li>
        <li className='description'>{props.bio}</li>
        <li > {props.des}</li>
      </Link>
    </div>
  );
}
