package com.example.demo.controller;

import java.time.Duration;
import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Services.ReservationServices;
import com.example.demo.entities.Reservation;


@RestController
@RequestMapping("reservations")
public class ReservationController {
	@Autowired
	private ReservationServices reservationServices;
	
	@CrossOrigin
	@PostMapping("/save")	
	public ResponseEntity<String> save(@RequestBody Reservation reservation) {
		 List<Reservation> previousReservations = reservationServices.findByUserOrderByDateDesc(reservation.getUser());

	        
	        if (!previousReservations.isEmpty()) {
	            LocalDateTime mostRecentReservationDateTime = previousReservations.get(0).getDate();
	            LocalDateTime currentDateTime = LocalDateTime.now();

	            
	            Duration timeDifference = Duration.between(mostRecentReservationDateTime, currentDateTime);

	            
	            if (timeDifference.toHours() < 24) {
	                return ResponseEntity.badRequest().body("You cannot make another reservation within 24 hours.");
	            }
	        }
	        
	        reservationServices.save(reservation);

	        return ResponseEntity.ok("Reservation made successfully.");
	}

	@CrossOrigin
	@DeleteMapping("/delete/{id}")
	public void delete(@PathVariable(required = true) String id) {
		Reservation s = reservationServices.findById(Integer.parseInt(id));
		reservationServices.delete(s);}
	
	@CrossOrigin
	@GetMapping("/all")
	public List<Reservation> findAll() {
		return reservationServices.findAll();
	}
	
	@GetMapping("/user/{userId}/reservation")
    public Map<String, Object>  getUserReservations(@PathVariable("userId") int userId) {
		
		Map<String, Object> response = new HashMap<>();
       
        List<Reservation> reservations = reservationServices.getUserReservations(userId);
        response.put("user", userId);
        response.put("reservations",reservations);
        

        return response;
    }
	
	
}
