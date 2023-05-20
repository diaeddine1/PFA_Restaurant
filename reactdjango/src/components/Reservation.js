import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
export default function Reservation() {
  const { restaurantId } = useParams();
  const [date, setDate] = useState("");

  const [reservation, setReservation] = useState([]);
  const [myreservation, setmyReservation] = useState();
  // const createReservation = (restaurantId, userId, reservationDate) => {
  //     const data = {
  //       restaurantId: restaurantId,
  //       userId: userId,
  //       reservationDate: reservationDate,
  //     };
  //     axios
  //     .post("http://localhost:8082/reservations/save", data)
  //     .then((response) => {
  //       console.log(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  // const handleSubmit = (event) => {
  //     event.preventDefault();
  //     const reservationData = { nom: userId };

  //     axios.post("http://localhost:8082/villes/save", reservationData)
  //       .then((response) => {
  //         console.log(response);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   };

  useEffect(() => {
    const getdata = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/restaurants/${restaurantId}`
        );
        console.log(response.date);
      } catch (err) {
        console.log(err);
      }
    };
    getdata();
  }, []);

  /*useEffect(() => {
    const fetchReservation = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/users/1/restaurant`
        );
        // const response = await axios.get(`http://localhost:8082/users/${userId}/restaurant`);
        setmyReservation(response.data);
        // console.log("response data:"+response.data.nom)
        // console.log("response data:"+response.data.prenom)
      } catch (error) {
        console.log(error);
      }
    };
    fetchReservation();
  }, []);*/

  // console.log(myreservation)
  // console.log(myreservation.nom)

  //console.log(reservation)
  const handleSubmit = async (event) => {
    event.preventDefault();
    /*const reservationData = {
      date: date,
      restaurant: { id: restaurantId },
      user: { id: 1 },
    };

    if (reservationData.date == "") {
      alert("enter a valid date ");
    } else {
      /*console.log(reservation[1].date)
            console.log("***"+reservationData.date)*/
    /*const reservationExists = reservation.some(
        (item) => item.date === reservationData.date
      );

      if (reservationExists) {
        // console.log(reservationData)
        alert("nigga u cant");
      } else {
        axios
          .post("http://localhost:8080/reservations/save", reservationData)
          .then((response) => {
            console.log(response);
            setDate("");
          })
          .catch((error) => {
            console.log(error);
            setDate("");
          });
      }*/
    const userid = localStorage.getItem("userid");
    const reservationData = {
      date: date,
      restaurant: { id: restaurantId },
      user: { id: userid },
    };
    try {
      const response = await axios.post(
        "http://localhost:8080/reservations/save",
        reservationData
      );
      if (response.status === 200) {
        console.success(response.status);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="reservation_container">
      <form className="form" onSubmit={handleSubmit}>
        <h1> MAKE YOUR RESERVATION</h1>
        <label style={{ fontSize: "20px" }}>
          Date De Reservation:
          <input
            type="datetime-local"
            value={date}
            onChange={(event) => setDate(event.target.value)}
          />
        </label>

        <button type="submit">RESERVER</button>
      </form>
    </div>
  );
}
