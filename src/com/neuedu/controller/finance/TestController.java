package com.neuedu.controller.finance;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class TestController {

	@RequestMapping("selectInvoiceInfo")
	@ResponseBody
	public String selectInvoiceInfo() {
		System.out.println("-----------------½øÈë¿ØÖÆÆ÷selectInvoiceInfo---------------------");
		return "ok";
	}
}
