package com.neuedu.model.bean;

import java.util.List;

public class First {
	private int fid;
	private String fname;
	private String fdescription;
	private List<Second> sd;
	public int getFid() {
		return fid;
	}
	public void setFid(int fid) {
		this.fid = fid;
	}
	public String getFname() {
		return fname;
	}
	public void setFname(String fname) {
		this.fname = fname;
	}
	public String getFdescription() {
		return fdescription;
	}
	public void setFdescription(String fdescription) {
		this.fdescription = fdescription;
	}
	public List<Second> getSd() {
		return sd;
	}
	public void setSd(List<Second> sd) {
		this.sd = sd;
	}
	

}
