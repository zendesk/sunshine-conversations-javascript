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
   * @return {APIResponse}
   */
  init(props) {
    const url = this.getFullURL('init');
    return http('POST', url, props, this.authHeaders);
  }

  /**
   * Fetch an app user
   * @param  {string} userId - an user id
   * @return {APIResponse}
   */
  get(userId) {
    const url = this.getFullURL('appusers', userId);
    return http('GET', url, {}, this.authHeaders);
  }

  /**
   * Update an app user
   * @param  {string} userId     - an user id
   * @param  {object} attributes - the attributes to update
   * @return {APIResponse}
   */
  update(userId, attributes) {
    const url = this.getFullURL('appusers', userId);
    return http('PUT', url, attributes, this.authHeaders);
  }


  /**
   * Track an event for an app user
   * @param  {string} userId     - an user id
   * @param  {string} eventName  - the name of the event to track
   * @param  {object} {attributes} - attributes to update before tracking the event
   * @return {APIResponse}
   */
  trackEvent(userId, eventName, attributes = {}) {
    const url = this.getFullURL('appusers', userId, 'events');
    return http('POST', url, {
      name: eventName,
      appUser: attributes
    }, this.authHeaders);
  }
}
