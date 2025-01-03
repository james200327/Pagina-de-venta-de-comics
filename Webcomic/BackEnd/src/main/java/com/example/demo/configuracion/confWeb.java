package com.example.demo.configuracion;

import java.util.List;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@EnableWebSecurity
public class confWeb{
	  @Bean
	    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
	        http
	            .csrf(csrf -> csrf.disable()) // Desactivar CSRF para facilitar pruebas en desarrollo
	            .authorizeHttpRequests(auth -> auth
	                .requestMatchers("/api/usuarios/registro", "/api/usuarios/login","/api/comics/todos",
	                		"/api/comics/{id}","api/comics/modificar/{id}","/api/comics/eliminar/{id}","/imagenes/**",
							"/api/pedidos/usuario/{usuarioId}/carrito","/api/pedidos/usuario/{usuarioId}/agregarProducto/{productoId}","/api/usuarios/{id}","/api/usuarios/{id}/comprar-puntos",
							"/api/pedidos/usuario/{usuarioId}/actualizarProducto/{comicId}","api/pedidos/{pedidoId}/confirmar", "api/pedidos/usuario/{usuarioId}/confirmados")// Rutas públicas para registro y login
	                .permitAll()
	                .anyRequest().authenticated() // Proteger todas las demás rutas
	            )
	            .cors(corsCustomizer -> corsCustomizer.configurationSource(corsConfigurationSource())); // Configurar CORS

	        return http.build();
	    }

	    @Bean
	    public CorsConfigurationSource corsConfigurationSource() {
	        CorsConfiguration configuration = new CorsConfiguration();
	        configuration.setAllowedOrigins(List.of("http://localhost:5173")); // Permitir solo este origen en desarrollo
	        configuration.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "OPTIONS"));
	        configuration.setAllowedHeaders(List.of("*"));
	        configuration.setAllowCredentials(true);

	        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
	        source.registerCorsConfiguration("/**", configuration);
	        return source;
	    }
	   
}
