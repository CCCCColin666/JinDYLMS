package com.neuedu.model.bean;

import java.util.Date;
import java.util.List;


public class Returninfo {
	  private int returnid;
	  private int returnquantity;
	  private Date finisheddate;
	  private String returnreason;
	  private String returnstatus;
	  private List<User>useridwr;
	  private List<Orderinfo>orderidwr;
	public int getReturnid() {
		return returnid;
	}
	public void setReturnid(int returnid) {
		this.returnid = returnid;
	}
	public int getReturnquantity() {
		return returnquantity;
	}
	public void setReturnquantity(int returnquantity) {
		this.returnquantity = returnquantity;
	}
	public Date getFinisheddate() {
		return finisheddate;
	}
	public void setFinisheddate(Date finisheddate) {
		this.finisheddate = finisheddate;
	}
	public String getReturnreason() {
		return returnreason;
	}
	public void setReturnreason(String returnreason) {
		this.returnreason = returnreason;
	}
	public String getReturnstatus() {
		return returnstatus;
	}
	public void setReturnstatus(String returnstatus) {
		this.returnstatus = returnstatus;
	}
	public List<User> getUseridwr() {
		return useridwr;
	}
	public void setUseridwr(List<User> useridwr) {
		this.useridwr = useridwr;
	}
	public List<Orderinfo> getOrderidwr() {
		return orderidwr;
	}
	public void setOrderidwr(List<Orderinfo> orderidwr) {
		this.orderidwr = orderidwr;
	}
	  
	  
	  
}
