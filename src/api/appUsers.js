import { BaseApi } from './base';
import { http } from '../utils/http';


/**
 * Init API properties
 * @typedef InitProps
 */

/**
 * @class AppUsersApi
 * @extends BaseApi
 */
export class AppUsersApi extends BaseApi {

  /**
   * Initializes the conversation for a user
   * @param  {InitProps} props
   * @param  {AuthCredentials} auth
   * @return {APIResponse}
   */
  init(props, auth) {
    const url = this.getFullURL('init');
    return this.getAuthenticationHeaders(auth).then((authHeaders) => {
      return http('POST', url, props, authHeaders);
    });
  }

  /**
   * Fetch an app user
   * @param  {string} userId - an user id
   * @param  {AuthCredentials} auth
   * @return {APIResponse}
   */
  get(userId, auth) {
    const url = this.getFullURL('appusers', userId);
    return this.getAuthenticationHeaders(auth).then((authHeaders) => {
      return http('GET', url, {}, authHeaders);
    });
  }

  /**
   * Update an app user
   * @param  {string} userId     - an user id
   * @param  {object} attributes - the attributes to update
   * @param  {AuthCredentials} auth
   * @return {APIResponse}
   */
  update(userId, attributes, auth) {
    const url = this.getFullURL('appusers', userId);
    return this.getAuthenticationHeaders(auth).then((authHeaders) => {
      return http('PUT', url, attributes, authHeaders);
    });
  }


  /**
   * Track an event for an app user
   * @param  {string} userId     - an user id
   * @param  {string} eventName  - the name of the event to Track
   * @param  {AuthCredentials} auth
   * @param  {object} {attributes} - attributes to update before tracking the event
   * @return {APIResponse}
   */
  trackEvent(userId, eventName, auth, attributes = {}) {
    const url = this.getFullURL('appusers', userId, 'events');
    return this.getAuthenticationHeaders(auth).then((authHeaders) => {
      return http('POST', url, {
        name: eventName,
        appUser: attributes
      }, authHeaders);
    });
  }
}
