export const environment = {
	production: false,
	originUri: 'http://localhost:4200',
	apiUrl: 'http://localhost:8080/mock-api',
	// apiUrl: 'http://ambrosia-dev.domplx.lu:8080/mock-api',
	// apiUrl: 'http://ambrosia.domplx.lu:8080/mock-api',
	assetsPath: 'assets',
	roles: {
		admin: 'GA_KC_MOCK_ADMIN',
		editor: 'GA_KC_MOCK_EDIT'
	},
	keycloak: {
		url: 'https://soteria.domplx.lu:8443',
		realm: 'internal-test',
		clientId: 'mock'
	}
};
