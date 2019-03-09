package com.neuedu.model.bean;

public class Lack_goods {
	private int lgid;
	private int orderid;
	private String lgstatus;
	private Orderinfo orderinfo;
	public int getLgid() {
		return lgid;
	}
	public void setLgid(int lgid) {
		this.lgid = lgid;
	}
	public int getOrderid() {
		return orderid;
	}
	public void setOrderid(int orderid) {
		this.orderid = orderid;
	}
	public String getLgstatus() {
		return lgstatus;
	}
	public void setLgstatus(String lgstatus) {
		this.lgstatus = lgstatus;
	}
	public Orderinfo getOrderinfo() {
		return orderinfo;
	}
	public void setOrderinfo(Orderinfo orderinfo) {
		this.orderinfo = orderinfo;
	}
	

}
