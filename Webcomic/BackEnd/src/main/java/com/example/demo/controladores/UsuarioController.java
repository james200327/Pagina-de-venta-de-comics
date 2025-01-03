package com.example.demo.controladores;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.configuracion.exceptionPers;
import com.example.demo.entidades.Usuario;
import com.example.demo.repositorios.UsuarioRepository;
import com.example.demo.servicios.UsuarioService;

import jakarta.persistence.EntityNotFoundException;

@RestController
@RequestMapping("/api/usuarios")

public class UsuarioController {

	private UsuarioService usuarioService;
	private PasswordEncoder passwordEncoder;
	
	public UsuarioController(UsuarioService usuarioService, PasswordEncoder passwordEncoder) {
		
		this.usuarioService = usuarioService;
		this.passwordEncoder = passwordEncoder;
		
	}
	
	
	@PostMapping("/registro")
	public ResponseEntity<String> registroUsuario(@RequestBody Usuario usuario) {
		usuarioService.registrarUsuario(usuario);
		
		 return new ResponseEntity<>("Usuario registrado exitosamente", HttpStatus.CREATED);
	}
	
	@PostMapping("/login")
	public ResponseEntity<Map<String, String>> loginUsuario(@RequestBody Usuario usuario) {
		
		try {
        Usuario usuarioCargado = usuarioService.cargarUsuario(usuario.getUsername());
        System.out.print(usuarioCargado.getUsername() + ", " + usuarioCargado.getPassword());

        // Verificar la contraseña
        if (passwordEncoder.matches(usuario.getPassword(), usuarioCargado.getPassword())) {
            System.out.println("Contraseña correcta");

            // Crear la respuesta con el rol y el userId
            Map<String, String> response = new HashMap<>();
            response.put("role", usuarioCargado.getRoles());
            response.put("userId", usuarioCargado.getId().toString());

            return ResponseEntity.ok(response);
        } else {
            System.out.println("Contraseña no correcta: " + usuario.getPassword());
            return new ResponseEntity<>(Map.of("message", "Contraseña inválida"), HttpStatus.UNAUTHORIZED);
        }

    } catch (EntityNotFoundException e) {
        return new ResponseEntity<>(Map.of("message", "Usuario no encontrado"), HttpStatus.NOT_FOUND);
    }
			
		
	}

	@PostMapping("/{id}/comprar-puntos")
    public ResponseEntity<String> comprarPuntos(
            @PathVariable Long id,
            @RequestParam String numeroTarjeta,
        @RequestParam String fechaExpiracion,
        @RequestParam String cvv,
        @RequestParam int cantidadPuntos) {

         // Validar datos básicos de la tarjeta
    if (numeroTarjeta.length() != 16) {
        return ResponseEntity.badRequest().body("Número de tarjeta inválido");
    }

    if (!fechaExpiracion.matches("\\d{2}/\\d{2}")) {
        return ResponseEntity.badRequest().body("Fecha de expiración inválida");
    }

    if (cvv.length() != 3) {
        return ResponseEntity.badRequest().body("CVV inválido");
    } // Obtener la cantidad de puntos
        usuarioService.actualizarPuntos(id, cantidadPuntos);
        return ResponseEntity.ok("Puntos comprados exitosamente");
    }
	
	@GetMapping("/{id}")
    public ResponseEntity<Usuario> obtenerUsuario(@PathVariable Long id) {
        Usuario usuario = usuarioService.cargarUsuarioPorId(id);
        return ResponseEntity.ok(usuario);
    }
	
}
