package com.ejemplo.articulo_practica.service;

import com.ejemplo.articulo_practica.model.Articulo;
import java.util.List;
import java.util.Optional;

public interface ArticuloService {
    List<Articulo> listarArticulos();
    Optional<Articulo> obtenerArticuloPorId(Long id);
    Articulo guardarArticulo(Articulo articulo);
    Articulo actualizarArticulo(Long id, Articulo articulo);
    void eliminarArticulo(Long id);

}
