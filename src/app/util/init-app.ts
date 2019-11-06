import { KeycloakService } from 'keycloak-angular';

export function initializer(keycloak: KeycloakService): () => Promise<any> {
  return (): Promise<any> => new Promise(async (resolve, reject) => {
    try {
      await keycloak.init({
        config: {
          url: 'http://localhost:8180/auth',
          realm: 'Angular Sample',
          clientId: 'ng-keycloak-sample'
        },
      });
      resolve();
    } catch (error) { }
  });
}