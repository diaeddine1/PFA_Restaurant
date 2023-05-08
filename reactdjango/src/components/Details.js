import React from 'react'

export default function Details(props) {
  console.log(props); // Check if the props object is being passed correctly
  const { state } = props.location;
  const { nom, img, des, adresse } = state || {};

  return (
    <div className='details'>
      <img src={img} />
      <h1>{nom}</h1>
      <p>{des}</p>
      <p>{adresse}</p>
    </div>
  );
}
