package com.neuedu.controller.distribution;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.neuedu.model.bean.Second;
import com.neuedu.model.service.distribution.SecondService;

@Controller
public class SecondController {
	@Autowired
	private SecondService secondService;
	@RequestMapping("twoAll")
	public @ResponseBody List<Second> SecondAll(int fid){
		return secondService.saveSecond(fid);
	}
	@RequestMapping("updateSecond")
	public @ResponseBody void UpdateSecond(Second second){
		secondService.updateSecond(second);
	} 
	@RequestMapping("insetSecond")
	public @ResponseBody void InsetSecond(Second second){
		secondService.insetSecond(second);
	}
	@RequestMapping("deleteSecond")
	public @ResponseBody String deleteSecond(int sdid){
		return secondService.deletesecond(sdid);
	}

}
