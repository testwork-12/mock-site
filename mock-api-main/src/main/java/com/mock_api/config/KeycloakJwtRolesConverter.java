package com.mock_api.config;

import org.springframework.core.convert.converter.Converter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.oauth2.jwt.Jwt;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Map;

public class KeycloakJwtRolesConverter implements Converter<Jwt, Collection<GrantedAuthority>> {

	private static final String CLAIM_REALM_ACCESS = "realm_access";
	private static final String CLAIM_RESOURCE_ACCESS = "resource_access";
	private static final String CLAIM_ROLES = "roles";

	private final String kcClientId;

	public KeycloakJwtRolesConverter(String kcClientId) {
		this.kcClientId = kcClientId;
	}

	@Override
	public Collection<GrantedAuthority> convert(Jwt jwt) {
		Map<String, Collection<String>> realmAccess = jwt.getClaim(CLAIM_REALM_ACCESS);
		Map<String, Map<String, Collection<String>>> resourceAccess = jwt.getClaim(CLAIM_RESOURCE_ACCESS);

		Collection<GrantedAuthority> grantedAuthorities = new ArrayList<>();

		if (realmAccess != null && !realmAccess.isEmpty()) {
			Collection<String> realmRole = realmAccess.get(CLAIM_ROLES);
			if (realmRole != null && !realmRole.isEmpty()) {
				realmRole.forEach(r -> {
					if (resourceAccess != null && !resourceAccess.isEmpty() && resourceAccess.containsKey(kcClientId)) {
						resourceAccess.get(kcClientId).get(CLAIM_ROLES).forEach(resourceRole -> {
							grantedAuthorities.add(new SimpleGrantedAuthority(resourceRole));
						});
					} else {
						grantedAuthorities.add(new SimpleGrantedAuthority(r));
					}
				});
			}
		}

		return grantedAuthorities;
	}
}
