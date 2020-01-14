package com.sanjay.org.shopping_management_spring.dao;

import java.util.ArrayList;

import com.sanjay.org.shopping_management_spring.model.User;

public interface UserDao {

	String insertUser(User user);

	User getUser(long id);

	ArrayList<User> getAllUsers();

	User updateUser(long id, User user);

}
