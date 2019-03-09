package com.neuedu.model.bean;

public class Centerstorehouse {
	private int cshid;
	private int meid;
	private int inventory;
	private int cshmax;	
	private int cshmin;
	private Merchandise me;
	public int getCshid() {
		return cshid;
	}
	public void setCshid(int cshid) {
		this.cshid = cshid;
	}
	public int getMeid() {
		return meid;
	}
	public void setMeid(int meid) {
		this.meid = meid;
	}
	public int getInventory() {
		return inventory;
	}
	public void setInventory(int inventory) {
		this.inventory = inventory;
	}
	public int getCshmax() {
		return cshmax;
	}
	public void setCshmax(int cshmax) {
		this.cshmax = cshmax;
	}
	public int getCshmin() {
		return cshmin;
	}
	public void setCshmin(int cshmin) {
		this.cshmin = cshmin;
	}
	public Merchandise getMe() {
		return me;
	}
	public void setMe(Merchandise me) {
		this.me = me;
	}

}
