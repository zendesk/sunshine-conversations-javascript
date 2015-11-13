import urljoin from 'urljoin';

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
  constructor(serviceUrl, authHeaders) {
    this.serviceUrl = serviceUrl;
    this.authHeaders = authHeaders;

    // both are allowed unless stated otherwise
    this.allowedAuth = ['jwt', 'appToken'];
  }

  /**
   * Build an URL from fragments to call the API
   * @return {string} - an URL
   */
  getFullURL() {
    const fragments = Array.from(arguments).map((fragment) => encodeURIComponent(fragment));
    return urljoin(this.serviceUrl, ...fragments);
  }

  /**
   * Validates the headers sent to the server
   * @return {object}             - the headers object passed in parameter
   */
  validateAuthHeaders() {
    if (!this.allowedAuth || this.allowedAuth.length === 0) {
      return Promise.reject(new Error('Must at least provide one authentication method.'));
    }

    if (!this.authHeaders) {
      return Promise.reject(new Error('Must provide headers.'));
    }

    const canContainJwt = this.allowedAuth.indexOf('jwt') >= 0;
    const canContainToken = this.allowedAuth.indexOf('appToken') >= 0;

    const hasJwt = !!this.authHeaders.Authorization;
    const hasToken = !!this.authHeaders['app-token'];

    if (!canContainJwt && hasJwt) {
      return Promise.reject(new Error('Must not use JWT for authentication.'));
    }

    if (!canContainToken && hasToken) {
      return Promise.reject(new Error('Must not use an app token for authentication.'));
    }

    return Promise.resolve(this.authHeaders);
  }
}
