
package com.ejemplo.articulo_practica.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import com.ejemplo.articulo_practica.model.Articulo;
import com.ejemplo.articulo_practica.service.ArticuloService;
import java.util.List;
import java.util.Optional;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.CrossOrigin;
import jakarta.validation.Valid;

@CrossOrigin(origins = "*")
@RestController
public class ArticuloController {

    private final ArticuloService articuloService;

    public ArticuloController(ArticuloService articuloService) {
        this.articuloService = articuloService;
    }

    @GetMapping("/articulos")
    public List<Articulo> listarArticulos() {
        return articuloService.listarArticulos();
    }

    @GetMapping("/articulos/{id}")
    public Optional<Articulo> obtenerArticuloPorId(@PathVariable Long id) {
        return articuloService.obtenerArticuloPorId(id);
    }

    @PostMapping("/articulos")
    public Articulo guardarArticulo(@Valid @RequestBody Articulo articulo) {
        return articuloService.guardarArticulo(articulo);
    }

    @PutMapping("/articulos/{id}")
    public Articulo actualizarArticulo(@PathVariable Long id, @Valid @RequestBody Articulo articulo) {
        return articuloService.actualizarArticulo(id, articulo);
    }

    @DeleteMapping("/articulos/{id}")
    public void eliminarArticulo(@PathVariable Long id) {
        articuloService.eliminarArticulo(id);
    }
}
