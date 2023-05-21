package com.example.demo.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Services.UserServices;
import com.example.demo.entities.User;


@RestController
@RequestMapping("users")
public class UserController {

	@Autowired
	private UserServices userServices;
	
	@CrossOrigin
	@PostMapping("/save")	
	public void save(@RequestBody User user) {
		userServices.save(user);
	}
	
	@CrossOrigin
	@DeleteMapping("/delete/{id}")
	public void delete(@PathVariable(required = true) String id) {
		User s = userServices.findById(Integer.parseInt(id));
		userServices.delete(s);}
	
	@CrossOrigin
	@GetMapping("/all")
	public List<User> findAll() {
		return userServices.findAll();
	}
	
	@CrossOrigin
	@PostMapping("/login")
	public Map<String, Object> login(@RequestBody Map<String, String> loginData) {
		Map<String, Object> response = new HashMap<>();
		String email = loginData.get("email");
		String password = loginData.get("password");
        User user = userServices.findByEmailAndPassword(email, password);
        if (user != null) {
        	response.put("id",user.getId());
        	response.put("role",user.getRole());
            return response;
        } else {
        	response.put("error","not found");
            return response;
        }
    }
}
