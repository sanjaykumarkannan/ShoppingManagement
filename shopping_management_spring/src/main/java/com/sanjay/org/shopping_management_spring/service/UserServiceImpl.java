package com.sanjay.org.shopping_management_spring.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sanjay.org.shopping_management_spring.dao.UserDao;
import com.sanjay.org.shopping_management_spring.model.ImageModel;
import com.sanjay.org.shopping_management_spring.model.User;

@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	UserDao userDao;
	
	
	@Override
	public String insertUser(User user) {
		// TODO Auto-generated method stub
		return userDao.insertUser(user);
	}

	@Override
	public User getUser(long id) {
		// TODO Auto-generated method stub
		
		return userDao.getUser(id);
	}

	@Override
	public ArrayList<ImageModel> getAllFiles(String userEmail) {
		// TODO Auto-generated method stub
		return userDao.getAllFiles(userEmail);
	}

	@Override
	public User updateUser(long id, User user) {
		// TODO Auto-generated method stub
		return userDao.updateUser(id,user);
	}

	@Override
	public String deleteUser(long id) {
		// TODO Auto-generated method stub
		return userDao.deleteUser(id);
	}

	@Override
	public boolean login(String username, String password) {
		// TODO Auto-generated method stub
		return userDao.login(username,password);
	}

	

}
