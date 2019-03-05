package com.neuedu.model.service.distribution;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.neuedu.model.bean.First;
import com.neuedu.model.mapper.distribution.FirstMapper;
import com.neuedu.model.mapper.distribution.SecondAllMapper;


@Service
public class FirstService {
	@Autowired
	private FirstMapper firstMapper;
	public List<First> selectFristAll() {
		return firstMapper.selectFirst();
	}
	public void saveFirst(First first){
		firstMapper.saveFirst(first);
	}
	@Autowired
	private SecondAllMapper secondAllMapper;
	public String deleteFirst(int fid){
		if(secondAllMapper.selectSecond(fid).size()>0){
			return "2";
		}else{
			firstMapper.DeleteFirst(fid);
			return "1";
		}	
	}
	public void updateFirst(First first){
		firstMapper.UpdateFirst(first);
	}

}
