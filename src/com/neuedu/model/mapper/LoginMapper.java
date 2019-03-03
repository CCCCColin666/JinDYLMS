package com.neuedu.model.mapper;

import java.util.Map;

import com.neuedu.model.bean.User;


public interface LoginMapper {
	public User selectUser(Map<String, Object> map);
}
