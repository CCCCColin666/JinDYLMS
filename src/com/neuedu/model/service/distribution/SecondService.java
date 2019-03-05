package com.neuedu.model.service.distribution;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.neuedu.model.bean.Second;
import com.neuedu.model.mapper.distribution.MerchandiseSelectMapper;
import com.neuedu.model.mapper.distribution.SecondAllMapper;

@Service
public class SecondService {
	@Autowired
	private SecondAllMapper secondAll;
	public List<Second> saveSecond(int fid){
		return secondAll.selectSecond(fid);
	}
	public void updateSecond(Second second){
		secondAll.saveSecond(second);
	}
	public void  insetSecond(Second second){
		secondAll.SecondInset(second);
	}
	@Autowired
	private MerchandiseSelectMapper MM;
	public String deletesecond(int sdid){
		Map<String,Integer> map = new HashMap<>();
		map.put("sdid", sdid);
		map.put("pagesize", 2);
		map.put("pagenum", 1);
		if(MM.MerchandiseSelect(map).size()>0){
			return "2";
		}else{
			secondAll.delstesecond(sdid);
			return "1";
		}
		
	}

}
