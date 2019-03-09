package com.neuedu.model.service.distribution;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.neuedu.model.bean.Lack_goods;
import com.neuedu.model.mapper.distribution.LackMapper;

@Service
public class Lack_goodsService {
	@Autowired
	private LackMapper lackMapper;
	public List<Lack_goods> selectLack(){
		return lackMapper.selectLack();
	}

}
