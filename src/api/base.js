import urljoin from 'urljoin';

/**
 * Authentication credentials - an app token or a JWT must be provided
 * @typedef AuthCredentials
 * @type {object}
 * @property {string} [appToken] - an app token
 * @property {string} [jwt] - a JWT generated with the app secret and key id
 */

/**
 * @class BaseAPI
 */
export class BaseAPI {
  constructor(props = {}) {
    this.root = props.root;
  }

  /**
   * Provide HTTP headers from auth credentials
   * @param  {AuthCredentials} props
   * @return {Promise}      - promise that resolves with the headers
   */
  getAuthenticationHeaders(props) {
    if (!props) {
      return Promise.reject(new Error('Must provide authentication information.'));
    }

    // JWT always have priority over a simple app token
    if (props.jwt) {
      return Promise.resolve({
        'Authorization': 'Bearer ' + props.jwt
      });
    } else if (props.appToken) {
      return Promise.resolve({
        'app-token': props.appToken
      });
    }

    return Promise.reject(new Error('Must provide a JWT or a app token'));
  }

  /**
   * Build an URL from fragments to call the API
   * @return {string} - an URL
   */
  getFullURL() {
    const fragments = Array.from(arguments).map((fragment) => encodeURIComponent(fragment));
    return urljoin(this.root.serverURL, ...fragments);
  }
}
