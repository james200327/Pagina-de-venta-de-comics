package com.example.demo.repositorios;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.entidades.Comic;

public interface ComicRepository extends JpaRepository<Comic, Long>{
	
	@Query("SELECT c FROM Comic c WHERE c.activo = true")
    List<Comic> findAllActiveComics();
}
