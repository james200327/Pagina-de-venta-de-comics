package com.example.demo.entidades;

import jakarta.persistence.Embeddable;

@Embeddable
public class Direccion {
	
	private String calle;
	private String codigoPostal;
	private String ciudad;
	
	public Direccion() {
		
	}
	
	public String getCalle() {
		return calle;
	}
	public void setCalle(String calle) {
		this.calle = calle;
	}
	public String getCodigoPostal() {
		return codigoPostal;
	}
	public void setCodigoPostal(String codigoPostal) {
		this.codigoPostal = codigoPostal;
	}
	public String getCiudad() {
		return ciudad;
	}
	public void setCiudad(String ciudad) {
		this.ciudad = ciudad;
	}
	
	
}
