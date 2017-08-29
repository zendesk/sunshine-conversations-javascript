import { http } from '../utils/http';

/**
 * Authentication credentials - a JWT must be provided
 * @typedef AuthCredentials
 * @type {object}
 * @property {string} [jwt] - a JWT generated with the app secret and key id
 */

/**
 * @class BaseApi
 */
export class BaseApi {
    constructor(serviceUrl, authHeaders, headers, requireAppId, httpAgent) {
        this.serviceUrl = serviceUrl;
        this.authHeaders = authHeaders;
        this.headers = headers;
        this.requireAppId = !!requireAppId;
        this.httpAgent = httpAgent;
    }

    /**
     * Validates the headers sent to the server
     * @return {object}             - the headers object passed in parameter
     */
    validateAuthHeaders() {
        if (!this.authHeaders) {
            return Promise.reject(new Error('Must provide headers.'));
        }

        const hasJwt = !!this.authHeaders.Authorization;

        if (!hasJwt) {
            return Promise.reject(new Error('Must use JWT for authentication.'));
        }

        return Promise.resolve();
    }


    request(method, url, data, {allowedAuth=this.allowedAuth} = {}) {
        return this.validateAuthHeaders(allowedAuth)
            .then(() => {
                return http(method, url, data, this.getHeaders(), this.httpAgent);
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
