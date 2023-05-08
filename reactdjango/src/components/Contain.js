import React from 'react';
import { Link } from 'react-router-dom';
import { GiPositionMarker } from 'react-icons/gi';

export default function Contain(props) {
  console.log(props);

  return (
    <div className='contain'>
    <Link to={{ pathname: '/Details', state: { ...props } }}>
 
        <li>
          <img src={props.img} />
        </li>
        <li>{props.nom}</li>
        <li>{props.des}</li>
        <li>
          <GiPositionMarker />
          {props.adresse}
        </li>
      </Link>
    </div>
  );
}
