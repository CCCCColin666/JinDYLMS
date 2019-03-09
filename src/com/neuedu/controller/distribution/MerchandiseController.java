package com.neuedu.controller.distribution;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

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
	@RequestMapping("deleteMerchandise")
	public @ResponseBody String deleteMerchandise(int meid){
		return MService.deleteMerchandise(meid);
	}
	@RequestMapping("oneMerchandise")
	public @ResponseBody List<Merchandise> oneMerchanise(int sdid,String mename ){
		return MService.selectMerchandise(sdid, mename);
	}
	@RequestMapping("details")
	public @ResponseBody Merchandise details(int meid){
		return MService.selectxq(meid);
	} 
	@RequestMapping("upMerchandise")
	public @ResponseBody void upMerchandise(Merchandise merchandise){
		System.out.println(merchandise.getMeid());
		MService.updateMerchandise(merchandise);
	}
	@RequestMapping("insetMerchandise/{sid}/{mesrebate}/{sdid}")
	public @ResponseBody void insetMerchandise (Merchandise merchandise, @PathVariable int sid, @PathVariable int mesrebate,@PathVariable int sdid){
		System.out.println(merchandise.getMename());
		MService.insertMerchandise(merchandise, sid, mesrebate, sdid);
	}
}
