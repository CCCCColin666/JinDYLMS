package com.neuedu.model.bean;

import java.util.List;

public class Merchandise {
	  private int meid;
	  private String mename;
	  private String measurement;
	  private Double saleprice;
	  private Double buyprice;
	  private int mesrebate;	 	 
	  private String kind;
	  private String factory;
	  private String savedays;
	  private String isback;
	  private String ischange;
	  private String mes;
	  private Second second;
	  private int sdid;
	  private int sid;
	  private Supplier sidw;
	  private List<Lack_goods> lack;
	  private Centerstorehouse cs;
	public int getSid() {
		return sid;
	}
	public void setSid(int sid) {
		this.sid = sid;
	}
	public int getMeid() {
		return meid;
	}
	public void setMeid(int meid) {
		this.meid = meid;
	}
	public String getMename() {
		return mename;
	}
	public void setMename(String mename) {
		this.mename = mename;
	}
	public String getMeasurement() {
		return measurement;
	}
	public void setMeasurement(String measurement) {
		this.measurement = measurement;
	}
	
	
	public Double getSaleprice() {
		return saleprice;
	}
	public void setSaleprice(Double saleprice) {
		this.saleprice = saleprice;
	}
	public Double getBuyprice() {
		return buyprice;
	}
	public void setBuyprice(Double buyprice) {
		this.buyprice = buyprice;
	}
	public int getMesrebate() {
		return mesrebate;
	}
	public void setMesrebate(int mesrebate) {
		this.mesrebate = mesrebate;
	}
	public String getKind() {
		return kind;
	}
	public void setKind(String kind) {
		this.kind = kind;
	}
	public String getFactory() {
		return factory;
	}
	public void setFactory(String factory) {
		this.factory = factory;
	}
	public String getSavedays() {
		return savedays;
	}
	public void setSavedays(String savedays) {
		this.savedays = savedays;
	}
	public String getIsback() {
		return isback;
	}
	public void setIsback(String isback) {
		this.isback = isback;
	}
	public String getIschange() {
		return ischange;
	}
	public void setIschange(String ischange) {
		this.ischange = ischange;
	}
	public String getMes() {
		return mes;
	}
	public void setMes(String mes) {
		this.mes = mes;
	}
	
	public Supplier getSidw() {
		return sidw;
	}
	public void setSidw(Supplier sidw) {
		this.sidw = sidw;
	}
	public Second getSecond() {
		return second;
	}
	public void setSecond(Second second) {
		this.second = second;
	}
	public int getSdid() {
		return sdid;
	}
	public void setSdid(int sdid) {
		this.sdid = sdid;
	}
	  
	  
	  
	  
	
	  
}
