package com.neuedu.model.service.distribution;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.neuedu.model.bean.Second;
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
	public void deletesecond(int sdid){
		secondAll.delstesecond(sdid);
	}

}
