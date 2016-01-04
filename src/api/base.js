import { urljoin } from '../utils/http';

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

    return Promise.resolve(this.authHeaders);
  }
}
