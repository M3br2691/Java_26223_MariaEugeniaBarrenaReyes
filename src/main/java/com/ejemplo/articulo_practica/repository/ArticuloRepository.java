package com.ejemplo.articulo_practica.repository;

import com.ejemplo.articulo_practica.model.Articulo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ArticuloRepository extends JpaRepository<Articulo, Long> {

}