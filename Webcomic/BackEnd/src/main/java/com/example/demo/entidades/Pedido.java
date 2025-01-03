package com.example.demo.entidades;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;

@Entity

public class Pedido {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "usuario_id")
    private Usuario usuario;

    @OneToMany(mappedBy = "pedido", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonManagedReference 
    private List<DetallesPedido> items = new ArrayList<>();

    private double total;

    private String estado; // "CARRITO" o "CONFIRMADO"

    public Pedido() {}

    public Pedido(Usuario usuario, String estado) {
        this.usuario = usuario;
        this.estado = estado;
        this.items = new ArrayList<>();
        this.total = 0.0;
    }

    // Métodos para agregar, actualizar y eliminar productos
    public void agregarProducto(Comic comic, int cantidad) {
        DetallesPedido detalle = items.stream()
                .filter(item -> item.getComic().equals(comic))
                .findFirst()
                .orElse(null);

        if (detalle == null) {
            detalle = new DetallesPedido(this, comic, cantidad, comic.getPrecio());
            items.add(detalle);
        } else {
            detalle.setCantidad(detalle.getCantidad() + cantidad);
        }
        recalcularTotal();
    }

    public void actualizarProducto(Comic comic, int cantidad) {
        DetallesPedido detalle = items.stream()
                .filter(item -> item.getComic().equals(comic))
                .findFirst()
                .orElse(null);

        if (detalle != null) {
            detalle.setCantidad(cantidad);
            if (cantidad <= 0) {
                items.remove(detalle);
            }
        }
        recalcularTotal();
    }

    public void eliminarProducto(Comic comic) {
        items.removeIf(item -> item.getComic().equals(comic));
        recalcularTotal();
    }

    public void confirmarPedido() {
        this.estado = "CONFIRMADO";
        items.forEach(detalle -> {
            Comic comic = detalle.getComic();
            comic.setStock(comic.getStock() - detalle.getCantidad());
        });
    }

    

    private void recalcularTotal() {
        this.total = items.stream().mapToDouble(item -> item.getPrecio() * item.getCantidad()).sum();
    }

    // Getters y setters
    public Usuario getUsuario(){
        return this.usuario;
    }

    public void setUsuario(Usuario usuario){
        this.usuario = usuario;
    }

    public List<DetallesPedido> getItems(){
        return this.items;
    }

    public void setItems(List<DetallesPedido> items) {
        this.items = items;
    }

    public String getEstado(){
        return this.estado;
    }

    public void setEstado(String estado){
        this.estado = estado;
    }

    public double getTotal(){
        return this.total;
    }

    public void setTotal(double total){
        this.total = total;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

}

