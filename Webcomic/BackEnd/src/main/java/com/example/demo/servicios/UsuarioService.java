package com.example.demo.servicios;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.demo.configuracion.exceptionPers;
import com.example.demo.entidades.Usuario;
import com.example.demo.repositorios.UsuarioRepository;

import jakarta.persistence.EntityNotFoundException;

@Service
public class UsuarioService {
	public static final String ROLE_USER = "USER";
    public static final String ROLE_ADMIN = "ADMIN";
	private UsuarioRepository usuarioRepository;
	private PasswordEncoder passwordEncoder;

	
	
	public UsuarioService(UsuarioRepository usuarioRepository, PasswordEncoder passwordEncoder) {
		this.usuarioRepository = usuarioRepository;
		this.passwordEncoder = passwordEncoder;
	}

	public Usuario registrarUsuario(Usuario usuario) {

		if (usuarioRepository.existsByUsername(usuario.getUsername())) {

			throw new RuntimeException("El nombre ya esta en uso");
		}

		if (usuarioRepository.existsByEmail(usuario.getEmail())) {

			throw new RuntimeException("El correo ya esta en uso");
		}
		
		usuario.setPassword(passwordEncoder.encode(usuario.getPassword()));
		
		if (usuario.getRoles() == null) {
            usuario.setRoles(ROLE_USER); // Rol por defecto
        }
		
		return usuarioRepository.save(usuario);
	}

	public Usuario cargarUsuario(String nombre) {
		
		if(usuarioRepository.existsByUsername(nombre)) {
			return usuarioRepository.findByUsername(nombre);
		}else {
			throw new RuntimeException("Usuario no encontrado");
		}	
                

	}

	public Usuario cargarUsuarioPorId(Long id) {
        return usuarioRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Usuario no encontrado con ID: " + id));
    }

	public Usuario actualizarPuntos(Long id, int puntos) {
        Usuario usuario = cargarUsuarioPorId(id);
        usuario.setPuntos(usuario.getPuntos() + puntos);
        return usuarioRepository.save(usuario);
    }

	
}
