package com.neuedu.model.mapper.distribution;

import java.util.List;

import com.neuedu.model.bean.Second;

public interface SecondAllMapper {
	public List<Second> selectSecond(int fid);
	public void delstesecond(int sdid);
	public void SecondInset(Second second);
	public void saveSecond(Second second);

}
