//package com.mock_api.config;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.core.env.Environment;
//
//import javax.annotation.PostConstruct;
//
//@Configuration
//public class SslConfig {
//	@Autowired
//	private Environment env;
//
//	@PostConstruct
//	private void configureSsl() {
//		System.setProperty("javax.net.ssl.trustStore", env.getProperty("mock-api.ssl.trust-store"));
//		System.setProperty("javax.net.ssl.trustStorePassword", env.getProperty("mock-api.ssl.trust-store-password"));
//		System.setProperty("javax.net.ssl.trustStoreType", env.getProperty("mock-api.ssl.trust-store-type"));
//	}
//}
