package com.sanjay.org.shopping_management_spring.service;

import java.util.ArrayList;

import com.sanjay.org.shopping_management_spring.model.User;

public interface UserService {
	
	 String insertUser(User user);

	 User getUser(long id);

	ArrayList<User> getAllUsers();

	User updateUser(long id, User user);

	String deleteUser(long id);

	boolean login(String username, String password);

	
	

}
