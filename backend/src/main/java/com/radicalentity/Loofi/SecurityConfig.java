package com.radicalentity.Loofi;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.web.SecurityFilterChain;

// This will need to be changed or deleted to use JWT Tokens for requests
@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .authorizeHttpRequests(authorizeRequests ->
                        authorizeRequests
                                .requestMatchers("/api/**").permitAll() // Allow all requests to your test API
                                .anyRequest().authenticated() // Secure other endpoints (optional for testing)
                )
                .csrf(AbstractHttpConfigurer::disable); // Disable CSRF for testing

        return http.build();
    }
}


