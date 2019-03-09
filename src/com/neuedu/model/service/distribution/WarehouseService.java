package com.neuedu.model.service.distribution;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.neuedu.model.bean.Warehouse_warrant;
import com.neuedu.model.mapper.distribution.WarehouseMapper;

@Service
public class WarehouseService {
	@Autowired 
	private WarehouseMapper warehouseMapper;
	public void insertWarehouse(Warehouse_warrant warehouse_warrant, int dan){
		Date now = new Date( );
		warehouse_warrant.setWdate(now);
		warehouse_warrant.setWaccount(warehouse_warrant.getWcount()*dan);
		warehouseMapper.insertWarehouse(warehouse_warrant);
	}
}
