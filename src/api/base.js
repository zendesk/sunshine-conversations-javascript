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
  }

  /**
   * Build an URL from fragments to call the API
   * @return {string} - an URL
   */
  getFullURL() {
    const fragments = Array.from(arguments).map((fragment) => encodeURIComponent(fragment));
    return urljoin(this.serviceUrl, ...fragments);
  }
}
