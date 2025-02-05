package com.mock_api.config;

import com.mock_api.config.properties.KeycloakProperties;
import com.mock_api.config.properties.RoleProperties;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.context.properties.ConfigurationPropertiesScan;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
@ConfigurationPropertiesScan(basePackageClasses = {ApplicationConfig.class})
public class ApplicationConfig {
	@Bean
	@ConfigurationProperties(prefix = "mock-api.roles")
	public RoleProperties roleProperties() {
		return new RoleProperties();
	}

	@Bean
	@ConfigurationProperties(prefix = "mock-api.keycloak")
	public KeycloakProperties keycloakProperties() {
		return new KeycloakProperties();
	}
}
