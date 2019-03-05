package com.neuedu.model.bean;

import java.util.List;

public class Merchandise {
	  private int meid;
	  private String mename;
	  private String measurement;
	  private Double salepric;
	  private Double buypric;
	  private int mesrebate;	 	 
	  private String kind;
	  private String factory;
	  private String savedays;
	  private String isback;
	  private String ischange;
	  private String mes;
	  private Second second;
	  private List<Second> sdidw;
	  private List<Supplier> sidw;
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
	public Double getSalepric() {
		return salepric;
	}
	public void setSalepric(Double salepric) {
		this.salepric = salepric;
	}
	public Double getBuypric() {
		return buypric;
	}
	public void setBuypric(Double buypric) {
		this.buypric = buypric;
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
	public List<Second> getSdidw() {
		return sdidw;
	}
	public void setSdidw(List<Second> sdidw) {
		this.sdidw = sdidw;
	}
	public List<Supplier> getSidw() {
		return sidw;
	}
	public void setSidw(List<Supplier> sidw) {
		this.sidw = sidw;
	}
	public Second getSecond() {
		return second;
	}
	public void setSecond(Second second) {
		this.second = second;
	}
	  
	  
	  
	  
	
	  
}
