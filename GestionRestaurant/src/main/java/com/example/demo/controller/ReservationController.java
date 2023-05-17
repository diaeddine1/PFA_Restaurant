package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("reservations")
public class ReservationController {
	@Autowired
	private ReservationServices reservationServices;
	
	@PostMapping("/save")	
	public void save(@RequestBody Reservation reservation) {
		reservationServices.save(reservation);
	}

	@DeleteMapping("/delete/{id}")
	public void delete(@PathVariable(required = true) String id) {
		Reservation s = reservationServices.findById(Integer.parseInt(id));
		reservationServices.delete(s);}

	@GetMapping("/all")
	public List<Reservation> findAll() {
		return reservationServices.findAll();
	}
	
}
