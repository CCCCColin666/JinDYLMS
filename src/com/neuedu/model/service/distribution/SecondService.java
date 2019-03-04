package com.neuedu.model.service.distribution;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.neuedu.model.bean.Second;
import com.neuedu.model.mapper.distribution.SecondAllMapper;
import com.neuedu.model.mapper.distribution.SecondInsetMapper;
import com.neuedu.model.mapper.distribution.SecondUpdateMapper;

@Service
public class SecondService {
	@Autowired
	private SecondAllMapper secondAll;
	public List<Second> saveSecond(int fid){
		return secondAll.selectSecond(fid);
	}
	@Autowired
	private SecondUpdateMapper secondUpdate;
	public void updateSecond(Second second){
		secondUpdate.saveSecond(second);
	}
	@Autowired
	private SecondInsetMapper secondInsetMapper;
	public void  insetSecond(Second second){
		secondInsetMapper.SecondInset(second);
	}

}
