package com.neuedu.controller.distribution;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.neuedu.model.bean.First;
import com.neuedu.model.service.distribution.FirstService;

@Controller
public class FirstController {
	@Autowired
	private FirstService firstService;
	@RequestMapping("AAAAA")
	public @ResponseBody List<First> FirstAll(){
		return firstService.selectFristAll();
	}
	@RequestMapping("insertFirst")
	public @ResponseBody String insertFirst(First first){
		firstService.saveFirst(first);
		return "添加成功";
	}
	@RequestMapping("deleteFirst")
	public @ResponseBody String deleteFirst(int fid){
		return firstService.deleteFirst(fid);
	}
	@RequestMapping("updateFirst")
	public @ResponseBody void updateFirst(First first){
		System.out.println(first.getFid());
		firstService.updateFirst(first);
	}
}
