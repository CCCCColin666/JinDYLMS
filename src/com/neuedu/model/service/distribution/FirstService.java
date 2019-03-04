package com.neuedu.model.service.distribution;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.neuedu.model.bean.First;
import com.neuedu.model.mapper.distribution.FirstAllMapper;
import com.neuedu.model.mapper.distribution.FirstDeleteMapper;
import com.neuedu.model.mapper.distribution.FirstInsertMapper;
import com.neuedu.model.mapper.distribution.FirstUpdateMapper;

@Service
public class FirstService {
	@Autowired
	private FirstAllMapper firstAllMapper;
	public List<First> selectFristAll() {
		// TODO Auto-generated method stub
		return firstAllMapper.selectFirstAll();
	}
	@Autowired
	private FirstInsertMapper firstInsert;
	public void saveFirst(First first){
		firstInsert.saveFirst(first);
	}
	@Autowired
	private FirstDeleteMapper firstDelete;
	public void deleteFirst(int fid){
		firstDelete.DeleteFirst(fid);
	}
	@Autowired
	private FirstUpdateMapper firstUpdate;
	public void updateFirst(First first){
		firstUpdate.UpdateFirst(first);
	}

}
