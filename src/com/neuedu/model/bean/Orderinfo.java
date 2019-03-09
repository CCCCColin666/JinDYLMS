package com.neuedu.model.bean;

import java.util.Date;
import java.util.List;


public class Orderinfo {
	private int orderid;
	private String receivephone;
	private String receiveadd;
	private String itemquantity;
	private int itemprice;
	private String orderstatus;
	private String ordertype;
	private String ordernote;
	private Date generationdate;
	private int itemid;
	private List<User> ueridwo;
	private List<Customer> cidwo;
	private Merchandise itemidwo;
	private Centerstorehouse cs;
	
	public Centerstorehouse getCs() {
		return cs;
	}
	public void setCs(Centerstorehouse cs) {
		this.cs = cs;
	}
	public int getOrderid() {
		return orderid;
	}
	public void setOrderid(int orderid) {
		this.orderid = orderid;
	}
	public String getReceivephone() {
		return receivephone;
	}
	public void setReceivephone(String receivephone) {
		this.receivephone = receivephone;
	}
	public String getReceiveadd() {
		return receiveadd;
	}
	public void setReceiveadd(String receiveadd) {
		this.receiveadd = receiveadd;
	}
	
	public String getItemquantity() {
		return itemquantity;
	}
	public void setItemquantity(String itemquantity) {
		this.itemquantity = itemquantity;
	}
	public int getItemprice() {
		return itemprice;
	}
	public void setItemprice(int itemprice) {
		this.itemprice = itemprice;
	}
	public String getOrderstatus() {
		return orderstatus;
	}
	public void setOrderstatus(String orderstatus) {
		this.orderstatus = orderstatus;
	}
	public String getOrdertype() {
		return ordertype;
	}
	public void setOrdertype(String ordertype) {
		this.ordertype = ordertype;
	}
	public String getOrdernote() {
		return ordernote;
	}
	public void setOrdernote(String ordernote) {
		this.ordernote = ordernote;
	}
	public Date getGenerationdate() {
		return generationdate;
	}
	public void setGenerationdate(Date generationdate) {
		this.generationdate = generationdate;
	}
	public List<User> getUeridwo() {
		return ueridwo;
	}
	public void setUeridwo(List<User> ueridwo) {
		this.ueridwo = ueridwo;
	}
	public List<Customer> getCidwo() {
		return cidwo;
	}
	public void setCidwo(List<Customer> cidwo) {
		this.cidwo = cidwo;
	}
	public Merchandise getItemidwo() {
		return itemidwo;
	}
	public void setItemidwo(Merchandise itemidwo) {
		this.itemidwo = itemidwo;
	}
	public int getItemid() {
		return itemid;
	}
	public void setItemid(int itemid) {
		this.itemid = itemid;
	}
	
	
	
	
}
