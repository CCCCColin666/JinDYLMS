package com.neuedu.model.mapper.distribution;

import java.util.List;

import com.neuedu.model.bean.Orderinfo;

public interface OrderinfoMapper {
	public List<Orderinfo> selectOrderinfo(int meid);

}
