package com.neuedu.controller.distribution;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.neuedu.model.bean.Supplier;
import com.neuedu.model.service.distribution.SupplierService;

@Controller
public class SupplierController {
	@Autowired
	private SupplierService supplierService;
	@RequestMapping("saveSupplier")
	public @ResponseBody List<Supplier> saveSupplier(){
		return supplierService.selectSupplier();
	}

}
