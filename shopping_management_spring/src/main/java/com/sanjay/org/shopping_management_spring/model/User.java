package com.sanjay.org.shopping_management_spring.model;

import java.util.Date;


public class User {

	private String userName;
	//JSON Date format 1997-01-21T04:30:00.500Z
	private Date userDOB;
	private int userId;
	private String userPassword;
	private String userEmail;
	
	
	
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public Date getUserDOB() {
		return userDOB;
	}
	public void setUserDOB(Date userDOB) {
		this.userDOB = userDOB;
	}
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public String getUserPassword() {
		return userPassword;
	}
	public void setUserPassword(String userPassword) {
		this.userPassword = userPassword;
	}
	public String getUserEmail() {
		return userEmail;
	}
	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}
	
	
	
}
