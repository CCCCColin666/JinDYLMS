package com.neuedu.controller.distribution;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.neuedu.model.bean.Second;
import com.neuedu.model.service.distribution.SecondService;

@Controller
public class SecondContribution {
	@Autowired
	private SecondService secondService;
	@RequestMapping("twoAll")
	public @ResponseBody List<Second> SecondAll(int fid){
		return secondService.saveSecond(fid);
	}

}
