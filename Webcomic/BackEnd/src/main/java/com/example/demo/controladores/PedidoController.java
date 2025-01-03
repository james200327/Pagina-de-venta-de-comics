package com.example.demo.controladores;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entidades.DetallesPedido;
import com.example.demo.entidades.Pedido;
import com.example.demo.entidades.Usuario;
import com.example.demo.repositorios.PedidoRepository;
import com.example.demo.servicios.DetallePedidoService;
import com.example.demo.servicios.PedidoService;

import jakarta.persistence.EntityNotFoundException;

@RestController
@RequestMapping("/api/pedidos")
public class PedidoController {

    @Autowired
    private PedidoService pedidoService;

    @GetMapping("/usuario/{usuarioId}/carrito")
    public ResponseEntity<Pedido> obtenerCarrito(@PathVariable Long usuarioId) {
        Pedido carrito = pedidoService.obtenerCarrito(usuarioId);
        return ResponseEntity.ok(carrito);
    }

    @PostMapping("/usuario/{usuarioId}/agregarProducto/{comicId}")
    public ResponseEntity<Pedido> agregarProducto(
            @PathVariable Long usuarioId,
            @PathVariable Long comicId,
            @RequestParam int cantidad) {
        Pedido carrito = pedidoService.agregarProducto(usuarioId, comicId, cantidad);
        return ResponseEntity.ok(carrito);
    }

    @PutMapping("/usuario/{usuarioId}/actualizarProducto/{comicId}")
    public ResponseEntity<Pedido> actualizarCantidad(
            @PathVariable Long usuarioId,
            @PathVariable Long comicId,
            @RequestParam int cantidad) {
        Pedido carrito = pedidoService.actualizarCantidad(usuarioId, comicId, cantidad);
        return ResponseEntity.ok(carrito);
    }

    @PostMapping("/{pedidoId}/confirmar")
    public ResponseEntity<?> confirmarPedido(@PathVariable Long pedidoId) {
        try {
            // Llama al servicio para confirmar el pedido
            Pedido pedido = pedidoService.confirmarPedido(pedidoId);
            return ResponseEntity.ok(pedido);
        } catch (IllegalStateException e) {
            // Maneja el error de puntos insuficientes
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        } catch (EntityNotFoundException e) {
            // Maneja el caso de que el pedido no exista
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }

    @GetMapping("/usuario/{usuarioId}/confirmados")
    public ResponseEntity<List<Pedido>> obtenerPedidosConfirmados(@PathVariable Long usuarioId) {
        List<Pedido> pedidos = pedidoService.obtenerPedidosConfirmados(usuarioId);
        return ResponseEntity.ok(pedidos);
    }
}



