package com.example.demo.configuracion;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entidades.Usuario;
import com.example.demo.repositorios.UsuarioRepository;
import com.example.demo.servicios.UsuarioService;

@Configuration
public class CreacionAdminUser {
	private final UsuarioService usuarioService;
    private final PasswordEncoder passwordEncoder;
    private final UsuarioRepository usuarioRepository;

    public CreacionAdminUser(UsuarioService usuarioService, PasswordEncoder passwordEncoder, UsuarioRepository usuarioRepository) {
        this.usuarioService = usuarioService;
        this.passwordEncoder = passwordEncoder;
        this.usuarioRepository = usuarioRepository;
    }

    @Bean
    public CommandLineRunner initAdminUser() {
        return args -> {
            // Verificar si el usuario administrador ya existe
            String adminUsername = "admin";
            String adminEmail = "admin@example.com";
            if (!usuarioRepository.existsByUsername(adminUsername)) {
                // Crear el usuario administrador con el rol adecuado
                Usuario admin = new Usuario();
                admin.setUsername(adminUsername);
                admin.setEmail(adminEmail);
                admin.setPassword(passwordEncoder.encode("admin1234"));
                admin.setRoles(usuarioService.ROLE_ADMIN);  // Asegúrate de que tu entidad `Usuario` tenga este campo

                usuarioRepository.save(admin);
                System.out.println("Usuario administrador creado.");
            } else {
                System.out.println("Usuario administrador ya existe."); 
            }
        };
    }
}
