package com.example.demo.servicios;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entidades.Comic;
import com.example.demo.entidades.DetallesPedido;
import com.example.demo.entidades.Pedido;
import com.example.demo.entidades.Usuario;
import com.example.demo.repositorios.ComicRepository;
import com.example.demo.repositorios.PedidoRepository;
import com.example.demo.repositorios.UsuarioRepository;

import jakarta.persistence.EntityNotFoundException;

@Service
public class PedidoService {

    @Autowired
    private PedidoRepository pedidoRepository;

    @Autowired
    private ComicRepository comicRepository;

    @Autowired
    private UsuarioRepository usuarioRepository;

    public Pedido obtenerCarrito(Long usuarioId) {
        return pedidoRepository.findByUsuarioIdAndEstado(usuarioId, "CARRITO")
                .orElseGet(() -> {
                    Usuario usuario = usuarioRepository.findById(usuarioId)
                            .orElseThrow(() -> new EntityNotFoundException("Usuario no encontrado"));
                    Pedido nuevoCarrito = new Pedido(usuario, "CARRITO");
                    return pedidoRepository.save(nuevoCarrito);
                });
    }

    public Pedido agregarProducto(Long usuarioId, Long comicId, int cantidad) {
        Pedido carrito = obtenerCarrito(usuarioId);
        Comic comic = comicRepository.findById(comicId)
                .orElseThrow(() -> new EntityNotFoundException("Comic no encontrado"));

        if (comic.getStock() < cantidad) {
            throw new IllegalArgumentException("No hay suficiente stock disponible");
        }

        carrito.agregarProducto(comic, cantidad);
        return pedidoRepository.save(carrito);
    }

    public Pedido actualizarCantidad(Long usuarioId, Long comicId, int cantidad) {
        Pedido carrito = obtenerCarrito(usuarioId);
        Comic comic = comicRepository.findById(comicId)
                .orElseThrow(() -> new EntityNotFoundException("Comic no encontrado"));

        carrito.actualizarProducto(comic, cantidad);
        return pedidoRepository.save(carrito);
    }

    public Pedido confirmarPedido(Long pedidoId) {
        Pedido pedido = pedidoRepository.findById(pedidoId)
                .orElseThrow(() -> new EntityNotFoundException("Pedido no encontrado"));

        Usuario usuario = pedido.getUsuario();
        if (usuario.getPuntos() < pedido.getTotal()) {
            throw new IllegalStateException("Puntos insuficientes para completar el pedido");
        }

        // Resta los puntos del usuario
        usuario.setPuntos(usuario.getPuntos() - pedido.getTotal());
        usuarioRepository.save(usuario);

        List<DetallesPedido> items = pedido.getItems();
        // Actualiza el stock de los productos
        for (DetallesPedido detalle : items) {
            Comic comic = detalle.getComic();
            int nuevoStock = comic.getStock() - detalle.getCantidad();

            if (nuevoStock < 0) {
                throw new IllegalStateException("Stock insuficiente para el producto: " + comic.getTitulo());
            }

            comic.setStock(nuevoStock);
            comicRepository.save(comic);
        }
        

        // Actualiza el estado del pedido
        pedido.setEstado("CONFIRMADO");
        return pedidoRepository.save(pedido);
    }

    public List<Pedido> obtenerPedidosConfirmados(Long usuarioId) {
        return pedidoRepository.findByUsuarioIdAndEstadoOrderByIdDesc(usuarioId, "CONFIRMADO");
    }
}
