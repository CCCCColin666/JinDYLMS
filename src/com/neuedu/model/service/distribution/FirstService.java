package com.neuedu.model.service.distribution;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.neuedu.model.bean.First;
import com.neuedu.model.mapper.distribution.FirstAllMapper;
import com.neuedu.model.mapper.distribution.FirstDelete;
import com.neuedu.model.mapper.distribution.FirstInsert;
import com.neuedu.model.mapper.distribution.FirstUpdate;

@Service
public class FirstService {
	@Autowired
	private FirstAllMapper firstAllMapper;
	public List<First> selectFristAll() {
		// TODO Auto-generated method stub
		return firstAllMapper.selectFirstAll();
	}
	@Autowired
	private FirstInsert firstInsert;
	public void saveFirst(First first){
		firstInsert.saveFirst(first);
	}
	@Autowired
	private FirstDelete firstDelete;
	public void deleteFirst(int fid){
		firstDelete.DeleteFirst(fid);
	}
	@Autowired
	private FirstUpdate firstUpdate;
	public void updateFirst(First first){
		firstUpdate.UpdateFirst(first);
	}

}
