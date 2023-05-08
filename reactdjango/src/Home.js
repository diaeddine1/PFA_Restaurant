
import React from 'react'

export default function Home() {
  return (
    <div className='dine-container' style={{position:'relative',width:"100%",height:"100%"}}>
        <img className='Dine' src='dine.jpg'/>
        <a href='/Restaurants'>
         <span className='dine-link'>
            COME DINE WITH US AND CHECK OUR MAGNITUDE OF RESTAURANTS
        </span>
        </a>
    </div>
  )
}
