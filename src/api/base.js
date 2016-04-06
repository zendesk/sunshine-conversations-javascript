import { urljoin } from '../utils/http';
import { http } from '../utils/http';

/**
 * Authentication credentials - an app token or a JWT must be provided
 * @typedef AuthCredentials
 * @type {object}
 * @property {string} [appToken] - an app token
 * @property {string} [jwt] - a JWT generated with the app secret and key id
 */

/**
 * @class BaseApi
 */
export class BaseApi {
    constructor(serviceUrl, authHeaders, headers) {
        this.serviceUrl = serviceUrl;
        this.authHeaders = authHeaders;
        this.headers = headers;

        // both are allowed unless stated otherwise
        this.allowedAuth = ['jwt', 'appToken'];
    }

    /**
     * Build an URL from fragments to call the API
     * @return {string} - an URL
     */
    getFullURL(...args) {
        const fragments = args.map((fragment) => encodeURIComponent(fragment));
        return urljoin(this.serviceUrl, ...fragments);
    }

    /**
     * Validates the headers sent to the server
     * @param  {array} allowedAuth  - an array of allowedAuth to override the ones on the instance
     * @return {object}             - the headers object passed in parameter
     */
    validateAuthHeaders(allowedAuth = this.allowedAuth) {
        if (!allowedAuth || allowedAuth.length === 0) {
            return Promise.reject(new Error('Must at least provide one authentication method.'));
        }

        if (!this.authHeaders) {
            return Promise.reject(new Error('Must provide headers.'));
        }

        const canContainJwt = allowedAuth.indexOf('jwt') >= 0;
        const canContainToken = allowedAuth.indexOf('appToken') >= 0;

        const hasJwt = !!this.authHeaders.Authorization;
        const hasToken = !!this.authHeaders['app-token'];

        if (!canContainJwt && hasJwt) {
            return Promise.reject(new Error('Must not use JWT for authentication.'));
        }

        if (!canContainToken && hasToken) {
            return Promise.reject(new Error('Must not use an app token for authentication.'));
        }

        return Promise.resolve();
    }


    request(method, url, data, {allowedAuth=this.allowedAuth} = {}) {
        return this.validateAuthHeaders(allowedAuth)
            .then(() => {
                return http(method, url, data, this.getHeaders());
            });
    }

    /**
     * Combines authorization headers and custom headers passed in the Smooch constructor
     * returns {object} - The headers to be sent in HTTP requests
     */
    getHeaders() {
        return {
            ...this.headers,
            ...this.authHeaders
        };
    }
}
