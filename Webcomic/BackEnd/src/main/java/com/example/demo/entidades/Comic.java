package com.example.demo.entidades;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Embedded;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Comic {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	Long id;
	
	private String titulo;
	private String autor;
	private String genero;
	private double precio;
	private int stock;
	private String imagenUrl;
	private boolean activo;
	@Column(length = 1000)
	private String descripcion;
	

	//private Date fecha_publicacion;
	
	public Comic() {
		
	}

	public Comic(Long id, String titulo, String autor, String genero, double precio, int stock,
			String imagenUrl, boolean activo,String descripcion) {
		
		this.id = id;
		this.titulo = titulo;
		this.autor = autor;
		this.genero = genero;
		this.precio = precio;
		this.stock = stock;
		this.imagenUrl = imagenUrl;
		this.activo = activo;
		this.descripcion = descripcion;
		//this.fecha_publicacion = fecha_publicacion;
	}

	public String getDescripcion(){
		return descripcion;
	}

	public void setDescripcion(String descripcion){
		this.descripcion = descripcion;
	}

	public boolean getActivo() {
		return activo;
	}

	public void setActivo(boolean activo) {
		this.activo = activo;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitulo() {
		return titulo;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	public String getAutor() {
		return autor;
	}

	public void setAutor(String autor) {
		this.autor = autor;
	}

	public String getGenero() {
		return genero;
	}

	public void setGenero(String genero) {
		this.genero = genero;
	}

	public double getPrecio() {
		return precio;
	}

	public void setPrecio(double precio) {
		this.precio = precio;
	}

	public int getStock() {
		return stock;
	}

	public void setStock(int stock) {
		this.stock = stock;
	}

	public String getImagenUrl() {
	    return imagenUrl;
	}

	public void setImagenUrl(String imagenUrl) {
	    this.imagenUrl = imagenUrl;
	}
	
	
	
	
}
