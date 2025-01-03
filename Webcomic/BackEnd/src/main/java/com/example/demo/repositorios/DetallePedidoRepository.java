package com.example.demo.repositorios;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entidades.DetallesPedido;

public interface DetallePedidoRepository extends JpaRepository<DetallesPedido, Long>{
    List<DetallesPedido> findByPedidoId(Long pedidoId);
}
