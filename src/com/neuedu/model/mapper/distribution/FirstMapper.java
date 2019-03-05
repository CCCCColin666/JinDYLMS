package com.neuedu.model.mapper.distribution;

import java.util.List;

import com.neuedu.model.bean.First;

public interface FirstMapper {
	public List<First> selectFirst();
	public void DeleteFirst(int fid);
	public void saveFirst(First first);
	public void UpdateFirst(First first);

}
