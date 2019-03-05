package com.neuedu.model.service.distribution;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.neuedu.model.bean.Merchandise;
import com.neuedu.model.mapper.distribution.MerchandiseSelectMapper;
@Service
public class MerchandiseService {
	@Autowired
	private MerchandiseSelectMapper MM;
	public List<Merchandise> saveMerchandise(int sdid,int pagesize,int pagenum){
		Map<String,Integer> map =new HashMap();
		map.put("sdid", sdid);
		map.put("pagesize", pagesize);
		map.put("pagenum", pagesize*(pagenum-1));
		return MM.MerchandiseSelect(map);
	}

}
