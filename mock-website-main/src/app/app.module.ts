import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {APP_INITIALIZER, NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {NgxPrintModule} from 'ngx-print';
import {AuthGuard} from '@service/auth/auth-guard.service';
import {AuthService} from '@service/auth/auth.service';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {NgxPaginationModule} from 'ngx-pagination';
import {JWT_OPTIONS} from '@auth0/angular-jwt';
import {KeycloakAngularModule, KeycloakService} from 'keycloak-angular';
import {environment} from '@environments/environment';

function initializeKeycloak(keycloak: KeycloakService) {
	return () =>
		keycloak.init({
			config: {
				url: environment.keycloak.url,
				realm: environment.keycloak.realm,
				clientId: environment.keycloak.clientId
			},
			initOptions: {
				onLoad: 'check-sso',
				silentCheckSsoRedirectUri:
					environment.originUri + '/assets/silent-check-sso.html',
				pkceMethod: 'S256'
			},
			shouldAddToken: request => {
				const {method, url} = request;

				const isGetRequest = 'GET' === method.toUpperCase();
				const acceptablePaths = ['/assets'];
				const isAcceptablePathMatch = acceptablePaths.some((path) =>
					url.includes(path)
				);

				return !(isGetRequest && isAcceptablePathMatch);
			}
		});
}

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		BrowserModule,
		FormsModule,
		AppRoutingModule,
		HttpClientModule,
		NgxPrintModule,
		BrowserAnimationsModule,
		NgxPaginationModule,
		KeycloakAngularModule,
	],
	providers: [
		{provide: LocationStrategy, useClass: HashLocationStrategy},
		{provide: JWT_OPTIONS, useValue: JWT_OPTIONS},
		AuthService,
		AuthGuard,
		HttpClient,
		{
			provide: APP_INITIALIZER,
			useFactory: initializeKeycloak,
			multi: true,
			deps: [KeycloakService]
		}
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
