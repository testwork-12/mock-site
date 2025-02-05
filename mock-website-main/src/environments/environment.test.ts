export const environment = {
	production: true,
	originUri: 'http://ambrosia-dev.domplx.lu/MOCK',
	apiUrl: 'http://ambrosia-dev.domplx.lu:8080/mock-api',
	// apiUrl: 'http://ambrosia.domplx.lu:8080/mock-api',
	assetsPath: 'MOCK/assets',
	roles: {
		admin: 'GA_KC_GI16_ADMIN',
		editor: 'GA_KC_GI16_EDIT'
	},
	keycloak: {
		url: 'https://soteria.domplx.lu:8443',
		realm: 'internal-test',
		clientId: 'mock'
	}
};
