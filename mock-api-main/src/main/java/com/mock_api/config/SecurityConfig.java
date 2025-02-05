package com.mock_api.config;

import com.mock_api.config.properties.KeycloakProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationConverter;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableMethodSecurity(securedEnabled = true)
public class SecurityConfig {
	private final KeycloakProperties keycloakProperties;

	public SecurityConfig(KeycloakProperties keycloakProperties) {
		this.keycloakProperties = keycloakProperties;
	}

	@Bean
	public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
		http.cors(Customizer.withDefaults())
			.csrf(AbstractHttpConfigurer::disable)
			.authorizeHttpRequests(c -> c
				.requestMatchers(HttpMethod.GET, "/api/**").permitAll()
				.anyRequest().authenticated())
			.oauth2ResourceServer(
				auth2 ->
					auth2.jwt(
						jwt ->
							jwt.jwtAuthenticationConverter(getCustomJwtAuthenticationConverter())
					)
			);
		return http.build();
	}

	JwtAuthenticationConverter getCustomJwtAuthenticationConverter() {
		JwtAuthenticationConverter converter = new JwtAuthenticationConverter();
		converter.setJwtGrantedAuthoritiesConverter(new KeycloakJwtRolesConverter(this.keycloakProperties.getClientId()));
		return converter;
	}
}
