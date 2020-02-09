package com.sanjay.org.shopping_management_spring.dao;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.dao.IncorrectResultSizeDataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import com.sanjay.org.shopping_management_spring.model.ImageModel;
import com.sanjay.org.shopping_management_spring.model.User;
import com.sanjay.org.shopping_management_spring.queries.ShoppingQueries;




@Repository
public class UserDaoImpl implements UserDao {
	
	@Autowired
	JdbcTemplate jdbcTemplate;
	
	@Override
	public String insertUser(User user) {
		// TODO Auto-generated method stub
		Object[] args = new Object[] {user.getUserName(),user.getUserEmail(),user.getUserPassword(),user.getUserDOB()};
		int out=0;
		System.out.println("Out is B"+out);
		out = jdbcTemplate.update(ShoppingQueries.INSERT_NEW_USER, args);
		System.out.println("Out is "+out);
		if(out !=0){
			
			return "Employee saved";
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
	public ArrayList<ImageModel> getAllFiles(String userEmail) {
		// TODO Auto-generated method stub
		ArrayList<ImageModel> users=new ArrayList<ImageModel>();
		List<Map<String, Object>> userList= jdbcTemplate.queryForList(ShoppingQueries.GET_ALL_FILES,new Object[] {userEmail});
		
		for(Map<String,Object> user:userList)
		{
			/*
			 * User addUser=new User();
			 * addUser.setUserId(Integer.parseInt(String.valueOf(user.get("id"))));
			 * addUser.setUserName(String.valueOf(user.get("name")));
			 * addUser.setUserDOB((Date)user.get("dob"));
			 * addUser.setUserPassword(String.valueOf(user.get("password")));
			 * users.add(addUser);
			 */
			
			ImageModel addProduct = new ImageModel();
			addProduct.setProductid(Long.parseLong(String.valueOf(user.get("productid"))));
			addProduct.setName(String.valueOf(user.get("name")));
			addProduct.setType(String.valueOf("type"));
			users.add(addProduct);
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

	@Override
	public String deleteUser(long id) {
		// TODO Auto-generated method stub
		int delete=jdbcTemplate.update(ShoppingQueries.DELETE_USER,id);
		System.out.println(delete);
		if(delete!=0)
		{
			return "Deleted!";
		}
		else
		{
			return "No record found in table to delete";
		}
		
	}

	@Override
	public boolean login(String username, String password) {
		// TODO Auto-generated method stub
		boolean validUser=false;
		System.out.println(username+" "+password);
		
		int count;
		Map<String, Object> countMap=jdbcTemplate.queryForMap(ShoppingQueries.CHECK_USER_EXIST, new Object[] {username});
		count=Integer.parseInt(String.valueOf(countMap.get("count")));
		
		
		if(count==1)
		{
			User user = jdbcTemplate.queryForObject(ShoppingQueries.GET_USER_CREDS, new Object[]{username}, new RowMapper<User>(){
	
				@Override
				public User mapRow(ResultSet rs, int rowNum) throws SQLException
				{
					User user=new User();
					
					user.setUserEmail(rs.getString("email"));
					user.setUserPassword(rs.getString("password"));
					return user;
				
				}});
			System.out.println(user.getUserEmail()+" + "+user.getUserPassword());
			if(password.equals(user.getUserPassword()))
			{
				validUser=true;
				System.out.println(validUser);

				return validUser;
			}
		}
		
		return validUser;
	}

	

		


}
