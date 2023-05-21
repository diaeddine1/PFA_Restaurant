package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin
@SpringBootApplication
public class GestionRestaurantApplication {

	public static void main(String[] args) {
		SpringApplication.run(GestionRestaurantApplication.class, args);
	}

}
