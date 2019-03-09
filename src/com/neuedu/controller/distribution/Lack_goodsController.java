package com.neuedu.controller.distribution;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.neuedu.model.bean.Lack_goods;
import com.neuedu.model.service.distribution.Lack_goodsService;

@Controller
public class Lack_goodsController {
	@Autowired
	private Lack_goodsService lack_goodsService;
	@RequestMapping("selectLack")
	public @ResponseBody List<Lack_goods> selectLack(){
		return lack_goodsService.selectLack();
	}

}
