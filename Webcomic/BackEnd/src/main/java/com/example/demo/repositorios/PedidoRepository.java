package com.example.demo.repositorios;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.entidades.Pedido;

public interface PedidoRepository extends JpaRepository<Pedido, Long> {
    Optional<Pedido> findByUsuarioIdAndEstado(Long usuarioId, String estado);
    List<Pedido> findByUsuarioIdAndEstadoOrderByIdDesc(Long usuarioId, String estado);
}
