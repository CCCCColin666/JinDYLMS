package com.neuedu.controller.distribution;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.neuedu.model.bean.Merchandise;
import com.neuedu.model.service.distribution.MerchandiseService;

@Controller
public class MerchandiseController {
	@Autowired
	private MerchandiseService MService;
	@RequestMapping("SelectMerchandise")
	public @ResponseBody List<Merchandise> SelectMerchandise(int sdid,int pagesize,int pagenum){
		return MService.saveMerchandise(sdid, pagesize, pagenum);
	}
}
