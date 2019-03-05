package com.neuedu.model.mapper.distribution;

import java.util.List;
import java.util.Map;

import com.neuedu.model.bean.Merchandise;

public interface MerchandiseSelectMapper {
	public List<Merchandise> MerchandiseSelect(Map map);
	public void deleteMerchandise(int meid);

}
