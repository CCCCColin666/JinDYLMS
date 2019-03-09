package com.neuedu.controller.distribution;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.neuedu.model.bean.Warehouse_warrant;
import com.neuedu.model.service.distribution.WarehouseService;

@Controller
public class WarehouseController {
	@Autowired
	private WarehouseService warehouseService;
	@RequestMapping("insertReplenish/{sid}/{dan}")
	public @ResponseBody void insertReplenish(Warehouse_warrant warehouse_warrant,@PathVariable int sid,@PathVariable int dan){
		System.out.println(warehouse_warrant.getWcount());
		warehouseService.insertWarehouse(warehouse_warrant, dan);
	}
}
