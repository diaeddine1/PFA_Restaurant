package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entities.Reservation;
import com.example.demo.entities.User;


public interface ReservationRepository extends JpaRepository<Reservation, Integer>{
	
	Reservation findById(int id);
    List<Reservation> findByUserOrderByDateDesc(User user);
    List<Reservation> findByUserId(int userId);
}
