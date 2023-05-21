import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function MyReservation() {
    const [myreservation,setmyReservation]=useState();
    useEffect(() => {
        const fetchReservation = async () => {
          try {
            const response = await axios.get(`http://localhost:8082/reservations/user/${localStorage.getItem("userid")}/reservation`);
            
            // const response = await axios.get(`http://localhost:8082/users/${userId}/restaurant`);
            setmyReservation(response.data.reservations);
            // console.log("response data:"+response.data.nom)
            // console.log("response data:"+response.data.prenom)
          } catch (error) {
            console.log(error); 
          }
        };
        fetchReservation();
    }, []);

    console.log(localStorage.getItem("userid"))
    console.log(myreservation)
  return (
    <div className='my_reservation'>
        <h1>MES RESERVATIONS</h1>
    {myreservation? myreservation.map(myreserv=>(

      <Link to={`/Details/${myreserv.restaurant.nom}` }>
        <span> Restaurant : {myreserv.restaurant.nom} </span>
        <span> Date De Reservation : {myreserv.date}</span>
        
      </Link>
      

      
    )):(<p>Vous n'avez Aucune Reservation </p>)}
   
          
           

           
            
            
        </div>
  )
}
