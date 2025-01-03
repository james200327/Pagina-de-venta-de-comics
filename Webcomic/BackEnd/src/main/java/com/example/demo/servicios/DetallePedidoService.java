package com.example.demo.servicios;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entidades.Comic;
import com.example.demo.entidades.DetallesPedido;
import com.example.demo.repositorios.ComicRepository;
import com.example.demo.repositorios.DetallePedidoRepository;

import jakarta.persistence.EntityNotFoundException;

@Service
public class DetallePedidoService {
    private DetallePedidoRepository detallePedidoRepository;
    private ComicRepository comicRepository;

    public DetallePedidoService(DetallePedidoRepository detallePedidoRepository, ComicRepository comicRepository) {
        this.detallePedidoRepository = detallePedidoRepository;
        this.comicRepository = comicRepository;
    }

    public DetallesPedido crearPedidoItem(Long comicId, int cantidad) {
        Comic comic = comicRepository.findById(comicId)
                .orElseThrow(() -> new EntityNotFoundException("Comic no encontrado"));

        DetallesPedido pedidoItem = new DetallesPedido();
        pedidoItem.setComic(comic);
        pedidoItem.setCantidad(cantidad);
        pedidoItem.setPrecio(comic.getPrecio());

        return detallePedidoRepository.save(pedidoItem);
    }
}
