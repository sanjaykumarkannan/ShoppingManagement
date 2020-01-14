package com.sanjay.org.shopping_management_spring.queries;

public class ShoppingQueries {
	
	
	public static String INSERT_NEW_USER=new String("insert into users (name,email,password,dob) values (?,?,?,now())");
	public static String GET_USER=new String("select * from users where id=?");
	public static String GET_ALL_USERS=new String("select * from users");
	public static String UPDATE_USER=new String ("update users set name=?,dob=? where id=?");

}
