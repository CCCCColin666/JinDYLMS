package com.neuedu.model.service.distribution;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.neuedu.model.bean.Supplier;
import com.neuedu.model.mapper.distribution.SupplierMapper;

@Service
public class SupplierService {
	@Autowired
	private SupplierMapper supplierMapper;
	public List<Supplier> selectSupplier(){
		return supplierMapper.selectSupplier();
	}

}
