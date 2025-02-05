import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';
import {KeycloakAuthGuard, KeycloakService} from 'keycloak-angular';
import {environment} from '@environments/environment';

@Injectable({
	providedIn: 'root'
})
export class AuthGuard extends KeycloakAuthGuard {
	constructor(
		protected readonly router: Router,
		protected readonly keycloak: KeycloakService
	) {
		super(router, keycloak);
	}

	public async isAccessAllowed(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	) {
		// Force the user to log in if currently unauthenticated.
		if (!this.authenticated) {
			await this.keycloak.login({
				redirectUri: environment.originUri + '/#' + state.url
			});
		}

		// Get the roles required from the route.
		const requiredRoles = route.data.roles;

		// Allow the user to proceed if no additional roles are required to access the route.
		if (!Array.isArray(requiredRoles) || requiredRoles.length === 0) {
			return true;
		}

		// Allow the user to proceed if all the required roles are present.
		const isAllowed = requiredRoles.some((role) => this.roles.includes(role));

		if (!isAllowed) {
			this.router.navigate(['/']);
		}

		return isAllowed;
	}
}
