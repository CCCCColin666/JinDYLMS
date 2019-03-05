package com.neuedu.model.service.distribution;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.neuedu.model.bean.First;
import com.neuedu.model.mapper.distribution.FirstMapper;


@Service
public class FirstService {
	@Autowired
	private FirstMapper firstMapper;
	public List<First> selectFristAll() {
		// TODO Auto-generated method stub
		return firstMapper.selectFirst();
	}
	public void saveFirst(First first){
		firstMapper.saveFirst(first);
	}
	public void deleteFirst(int fid){
		firstMapper.DeleteFirst(fid);
	}
	public void updateFirst(First first){
		firstMapper.UpdateFirst(first);
	}

}
