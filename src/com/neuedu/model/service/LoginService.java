package com.neuedu.model.service;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.neuedu.model.bean.User;
import com.neuedu.model.mapper.LoginMapper;
@Service
public class LoginService {
@Autowired
private LoginMapper loginMapper;
	public String selectUser(String username, String password) {
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("username",username);
		map.put("password",password);
		User u =loginMapper.selectUser(map);
		if(u!=null) {
			return "1";
		}else {
			return "0";
		}
	}

}
