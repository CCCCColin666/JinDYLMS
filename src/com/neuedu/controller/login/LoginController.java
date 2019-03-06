package com.neuedu.controller.login;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.neuedu.model.service.LoginService;

@Controller
public class LoginController {

	@Autowired
	private LoginService loginService;
	@RequestMapping(value="login/{username}/{password}",produces="text/html;charset=UTF-8")
	@ResponseBody
	public String selectUser(@PathVariable String username, @PathVariable String password) {
		return loginService.selectUser(username, password);
	}
}
