package com.neuedu.model.bean;

import java.util.Date;

public class Warehouse_warrant {
	private int wid;
	private int meid;
	private int wcount;
	private int waccount;
	private Date wdate;
	private String wstatus;
	private int sid;
	public int getWid() {
		return wid;
	}
	public void setWid(int wid) {
		this.wid = wid;
	}
	public int getMeid() {
		return meid;
	}
	public void setMeid(int meid) {
		this.meid = meid;
	}
	public int getWcount() {
		return wcount;
	}
	public void setWcount(int wcount) {
		this.wcount = wcount;
	}
	public int getWaccount() {
		return waccount;
	}
	public void setWaccount(int waccount) {
		this.waccount = waccount;
	}
	public Date getWdate() {
		return wdate;
	}
	public void setWdate(Date wdate) {
		this.wdate = wdate;
	}
	public String getWstatus() {
		return wstatus;
	}
	public void setWstatus(String wstatus) {
		this.wstatus = wstatus;
	}
	public int getSid() {
		return sid;
	}
	public void setSid(int sid) {
		this.sid = sid;
	}
		

}
