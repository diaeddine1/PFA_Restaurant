package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Services.RestaurantServices;
import com.example.demo.entities.Restaurant;

@RestController
@RequestMapping("restaurants")
public class RestaurantController {
	@Autowired
	private RestaurantServices restaurantServices;

	@PostMapping("/save")	
	public void save(@RequestBody Restaurant restaurant) {
		restaurantServices.save(restaurant);
	}

	@DeleteMapping("/delete/{id}")
	public void delete(@PathVariable(required = true) String id) {
		Restaurant s = restaurantServices.findById(Integer.parseInt(id));
		restaurantServices.delete(s);}

	@GetMapping("/all")
	public List<Restaurant> findAll() {
		return restaurantServices.findAll();
	}

}
