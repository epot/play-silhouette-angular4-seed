import { CustomConfig } from 'ng2-ui-auth';

export const GOOGLE_CLIENT_ID = '445581959814-s926r5damu6oeqcug10lk0vmc7vd0qva.apps.googleusercontent.com';

export class MyAuthConfig extends CustomConfig {
    defaultHeaders = {'Content-Type': 'application/json'};
    baseUrl = '/';
    loginUrl = '/signIn';
    signupUrl = '/signUp';
    tokenName = 'token';
    tokenPrefix = 'ng2-ui-auth'; // Local Storage name prefix
    authHeader = 'X-Auth-Token';
    storageType = 'sessionStorage' as 'sessionStorage';
    providers = {
        google: {
            clientId: GOOGLE_CLIENT_ID,
            url: '/authenticate/google'}
        };
}