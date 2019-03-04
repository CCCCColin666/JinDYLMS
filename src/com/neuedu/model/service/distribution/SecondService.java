package com.neuedu.model.service.distribution;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.neuedu.model.bean.Second;
import com.neuedu.model.mapper.distribution.SecondAll;

@Service
public class SecondService {
	@Autowired
	private SecondAll secondAll;
	public List<Second> saveSecond(int fid){
		return secondAll.selectSecond(fid);
	}

}
