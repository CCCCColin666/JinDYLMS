package com.neuedu.controller.login;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.neuedu.model.bean.User;
import com.neuedu.model.service.LoginService.LoginService;

@Controller
public class LoginController {

	@Autowired
	private LoginService loginService;

	@RequestMapping("login/{username}/{password}")
	public @ResponseBody User initActivityById(@PathVariable String username, @PathVariable String password) {
		return loginService.selectUser(username, password);
	}
}
