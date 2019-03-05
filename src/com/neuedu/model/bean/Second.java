package com.neuedu.model.bean;

import java.util.List;

public class Second {
	private int sdid;
	private String sdname;
	private String sddescription;
	private int fid;
	private First first;
	private List<Merchandise> me;
	public int getSdid() {
		return sdid;
	}
	public void setSdid(int sdid) {
		this.sdid = sdid;
	}
	public String getSdname() {
		return sdname;
	}
	public void setSdname(String sdname) {
		this.sdname = sdname;
	}
	public String getSddescription() {
		return sddescription;
	}
	public void setSddescription(String sddescription) {
		this.sddescription = sddescription;
	}
	public int getFid() {
		return fid;
	}
	public void setFid(int fid) {
		this.fid = fid;
	}
	public List<Merchandise> getMe() {
		return me;
	}
	public void setMe(List<Merchandise> me) {
		this.me = me;
	}
	public First getFirst() {
		return first;
	}
	public void setFirst(First first) {
		this.first = first;
	}
	
	

}
