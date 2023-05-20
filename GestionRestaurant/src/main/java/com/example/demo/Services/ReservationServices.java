package com.example.demo.Services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.webjars.NotFoundException;

import com.example.demo.IDao.IDao;
import com.example.demo.entities.Reservation;
import com.example.demo.entities.Restaurant;
import com.example.demo.entities.User;
import com.example.demo.repository.ReservationRepository;
import com.example.demo.repository.RestaurantRepository;

@Service
public class ReservationServices implements IDao<Reservation>{
	
	@Autowired
	private ReservationRepository reserv;
	
	@Autowired
	private RestaurantRepository restaurantRepository;

	@Override
	public void save(Reservation r) {
		
		reserv.save(r);
		
	}

	@Override
	public void delete(Reservation r) {
		reserv.delete(r);
		
	}

	@Override
	public void update(Reservation r) {
		reserv.save(r);
		
	}

	@Override
	public List<Reservation> findAll() {
		
		return reserv.findAll();
	}

	@Override
	public Reservation findById(int id) {
		
		return reserv.findById(id);
	}
	
	public List<Reservation> findByUserOrderByDateDesc(User user){
		return reserv.findByUserOrderByDateDesc(user);
	};
	
	public List<Reservation> getUserReservations(int userId) {
        
        List<Reservation> reservations = reserv.findByUserId(userId);
        
        return reservations;
    }
	


}
