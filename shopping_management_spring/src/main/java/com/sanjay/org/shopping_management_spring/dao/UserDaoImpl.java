package com.sanjay.org.shopping_management_spring.dao;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import com.sanjay.org.shopping_management_spring.model.User;
import com.sanjay.org.shopping_management_spring.queries.ShoppingQueries;

@Repository
public class UserDaoImpl implements UserDao {
	
	@Autowired
	JdbcTemplate jdbcTemplate;
	
	@Override
	public String insertUser(User user) {
		// TODO Auto-generated method stub
		Object[] args = new Object[] {user.getUserName(),user.getUserId(),user.getUserPassword()};
		
		int out = jdbcTemplate.update(ShoppingQueries.INSERT_NEW_USER, args);
		
		if(out !=0){
			return "Employee saved ";
		}
		else
			return "Employee save failed ";
	}

	@Override
	public User getUser(long id) {
		// TODO Auto-generated method stub
		
		User user = jdbcTemplate.queryForObject(ShoppingQueries.GET_USER, new Object[]{id}, new RowMapper<User>(){

			@Override
			public User mapRow(ResultSet rs, int rowNum)
					throws SQLException {
				User user=new User();
				user.setUserId(rs.getInt("id"));
				user.setUserName(rs.getString("name"));
				user.setUserDOB(rs.getDate("dob"));
				return user;
			}});
		
		return user;
	
	}

	@Override
	public ArrayList<User> getAllUsers() {
		// TODO Auto-generated method stub
		ArrayList<User> users=new ArrayList<User>();
		List<Map<String, Object>> userList= jdbcTemplate.queryForList(ShoppingQueries.GET_ALL_USERS);
		
		for(Map<String,Object> user:userList)
		{
			User addUser=new User();
			addUser.setUserId(Integer.parseInt(String.valueOf(user.get("id"))));
			addUser.setUserName(String.valueOf(user.get("name")));
			addUser.setUserDOB((Date)user.get("dob"));
			users.add(addUser);
		}
		return users;
	}

	@Override
	public User updateUser(long id, User user) {
		// TODO Auto-generated method stub
		Object obj[]=new Object[]{user.getUserName(),user.getUserDOB(),id};
		int update=jdbcTemplate.update(ShoppingQueries.UPDATE_USER,obj);
		System.out.println(update);
		return user;
	}
		


}
