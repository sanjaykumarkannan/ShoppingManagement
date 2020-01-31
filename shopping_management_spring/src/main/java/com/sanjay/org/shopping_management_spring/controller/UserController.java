package com.sanjay.org.shopping_management_spring.controller;

import com.sanjay.org.shopping_management_spring.service.UserService;

import java.util.ArrayList;
import java.util.List;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import com.sanjay.org.shopping_management_spring.model.User;

@CrossOrigin(origins ="*")
@RestController
public class UserController {
	@Autowired
	UserService userService;
	
	@GetMapping("/user/get/{id}")
	public User getUser(@PathVariable("id") long id)
	{
		
		return userService.getUser(id);
		
	}
	
	@GetMapping("/user/get/all")
	public ArrayList<User> getAllUsers()
	{
		
		return userService.getAllUsers();
		
	}
	
	
	@PostMapping("/user/add")
	public ResponseEntity<String> insertUser(@RequestBody User user) {
		//String query = "insert into users (name) values (?)";
		
		return new ResponseEntity<>(userService.insertUser(user), HttpStatus.OK);
	}
	
	@PutMapping("/user/update/{id}")
	public User updateUser(@PathVariable("id")	long id,@RequestBody User user)
	{
		return userService.updateUser(id,user);
		
	}
	
	@DeleteMapping("user/delete/{id}")
	public String deleteUser(@PathVariable("id") long id)
	{
		return userService.deleteUser(id);
		
	}
	
	@PostMapping("/login")
	public boolean login(@RequestBody User user)
	{
		return userService.login(user.getUserEmail(),user.getUserPassword());
	}
}
	

