package com.example.demo.controladores;

import java.io.File;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.Date;
import java.util.List;

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
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.entidades.Comic;
import com.example.demo.servicios.ComicService;

@RestController
@RequestMapping("/api/comics")
public class ComicController {

	private ComicService comicService;

	public ComicController(ComicService comicService) {
		this.comicService = comicService;
	}

	@PostMapping("/agregar")
	public ResponseEntity<String> agregarComic(
			@RequestParam("titulo") String titulo,
			@RequestParam("autor") String autor,
			@RequestParam("genero") String genero,
			@RequestParam("precio") Double precio,
			@RequestParam("stock") Integer stock,
			@RequestParam("imagen") MultipartFile imagen,
			@RequestParam("descripcion") String descripcion) {

		try {
			String nombreArchivo = System.currentTimeMillis() + "_" + imagen.getOriginalFilename();
			Path rutaArchivo = Paths.get("uploads/imagenes/" + nombreArchivo);
			Files.createDirectories(rutaArchivo.getParent()); // Crear directorios si no existen
			Files.copy(imagen.getInputStream(), rutaArchivo, StandardCopyOption.REPLACE_EXISTING);

			// Crear y guardar el objeto Comic
			Comic nuevoComic = new Comic();
			nuevoComic.setTitulo(titulo);
			nuevoComic.setAutor(autor);
			nuevoComic.setGenero(genero);
			nuevoComic.setPrecio(precio);
			nuevoComic.setStock(stock);
			nuevoComic.setActivo(true);
			// Guardar la URL relativa de la imagen en la base de datos

			nuevoComic.setImagenUrl("/imagenes/" + nombreArchivo);
			nuevoComic.setDescripcion(descripcion);
			comicService.agregarComic(nuevoComic);

			return new ResponseEntity<>("Cómic agregado con imagen", HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>("Error al agregar el cómic con imagen", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@PutMapping("/modificar/{id}")
	public ResponseEntity<Comic> modificarComic(@PathVariable Long id, @RequestBody Comic comic) {

		Comic comicModificado = comicService.modificarComic(id, comic);
		return new ResponseEntity<>(comicModificado, HttpStatus.OK);
	}

	@DeleteMapping("/eliminar/{id}")
	public ResponseEntity<Void> eliminarComic(@PathVariable Long id) {

		comicService.eliminarComic(id);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}

	@GetMapping("/todos")
	public ResponseEntity<List<Comic>> obtenerListaComics() {

		List<Comic> comics = comicService.obtenerTodosLosComics();
		return new ResponseEntity<>(comics, HttpStatus.OK);
	}

	@GetMapping("/{id}")
	public ResponseEntity<Comic> obtenerComicId(@PathVariable("id") Long id) {

		Comic comic = comicService.obtenerComicPorId(id);
		System.out.println(comic.getTitulo());
		return new ResponseEntity<>(comic, HttpStatus.OK);
	}
}
