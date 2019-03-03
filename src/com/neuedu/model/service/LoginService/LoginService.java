package com.neuedu.model.service.LoginService;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.neuedu.model.bean.User;
import com.neuedu.model.mapper.LoginMapper;
@Service
public class LoginService {
@Autowired
private LoginMapper loginMapper;
	public User selectUser(String username, String password) {
		Map<String, Object> map = new HashMap();
		map.put("username",username);
		map.put("password",password);
		return loginMapper.selectUser(map);
	}

}
