import {Injectable} from '@angular/core';
import {KeycloakService} from 'keycloak-angular';
import {environment} from '@environments/environment';

@Injectable()
export class AuthService {
	constructor(private keycloakService: KeycloakService) {
	}

	login() {
		this.keycloakService.login({
			redirectUri: environment.originUri + '/#/'
		});
	}

	logout() {
		this.keycloakService.logout(environment.originUri + '/#/');
	}

	isAuthenticated(): Promise<boolean> {
		return this.keycloakService.isLoggedIn();
	}

	isAdmin(): boolean {
		return this.keycloakService.isUserInRole(environment.roles.admin);
	}

	isEditor(): boolean {
		return this.keycloakService.isUserInRole(environment.roles.editor);
	}
}
