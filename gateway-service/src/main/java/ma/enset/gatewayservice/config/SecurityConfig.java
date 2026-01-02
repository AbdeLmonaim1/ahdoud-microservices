package ma.enset.gatewayservice.config;

import org.springframework.context.annotation.Bean;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.reactive.CorsWebFilter;
import org.springframework.web.cors.reactive.UrlBasedCorsConfigurationSource;

import java.util.Arrays;
import java.util.List;

public class SecurityConfig {
    @Bean
    public CorsWebFilter corsWebFilter() {
        CorsConfiguration corsConfig = new CorsConfiguration();
        // Origines autorisées
        corsConfig.setAllowedOrigins(List.of("http://localhost:4200"));
        // Méthodes HTTP autorisées
        corsConfig.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"));
        // Headers autorisés
        corsConfig.setAllowedHeaders(Arrays.asList("*"));
        // Permettre les credentials
        corsConfig.setAllowCredentials(true);
        // Headers exposés au client
        corsConfig.setExposedHeaders(Arrays.asList("Authorization"));
        // Durée de cache
        corsConfig.setMaxAge(3600L);
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", corsConfig);
        return new CorsWebFilter(source);
    }
}
