import { BaseAPI } from './base';
import { http } from '../utils/http';

/**
 * Webhook properties
 * @typedef WebhookProps
 */

/**
 * @class WebhooksAPI
 * @extends BaseAPI
 */
export class WebhooksAPI extends BaseAPI {

  /**
   * Validates the headers sent to the server
   * @param  {object} headers - an headers object
   * @return {object}         - the headers object passed in parameter
   */
  validateAuth(headers) {
    return headers && headers.Authorization ? Promise.resolve(headers) : Promise.reject(new Error('Must provide a JWT.'));
  }

  /**
   * Validates the properties sent to the API
   * @param  {WebhookProps}  props      - a properties object
   * @param  {Boolean} isTargetRequired - tells if the target property is required (i.e., on creation) [default = false]
   * @return {WebhookProps}             - the properties object passed in parameter
   */
  validateProps(props, isTargetRequired = false) {
    if (!props || Object.keys(props).length === 0) {
      return Promise.reject(new Error('Must provide props.'));
    }

    if (isTargetRequired && !props.target) {
      return Promise.reject(new Error('Must provide a target.'));
    }

    return Promise.resolve(props);
  }

  /**
   * List all webhooks
   * @param  {AuthCredentials} auth
   * @return {APIResponse}
   */
  list(auth) {
    const url = this.getFullURL('webhooks');
    return this.getAuthenticationHeaders(auth).then(this.validateAuth).then((authHeaders) => {
      return http('GET', url, {}, authHeaders);
    });
  }

  /**
   * Creates a webhook
   * @param  {WebhookProps} props - a properties object
   * @param  {AuthCredentials} auth
   * @return {APIResponse}
   */
  create(props, auth) {
    const url = this.getFullURL('webhooks');
    return this.getAuthenticationHeaders(auth).then(this.validateAuth).then((authHeaders) => {
      return this.validateProps(props, true).then((validatedProps) => {
        return http('POST', url, validatedProps, authHeaders);
      });
    });
  }

  /**
   * Retrieves a webhook
   * @param  {string} webhookId - an id
   * @param  {AuthCredentials} auth
   * @return {APIResponse}
   */
  get(webhookId, auth) {
    const url = this.getFullURL('webhooks', webhookId);
    return this.getAuthenticationHeaders(auth).then(this.validateAuth).then((authHeaders) => {
      return http('GET', url, {}, authHeaders);
    });
  }

  /**
   * Updates a webhook
   * @param  {string} webhookId    - an id
   * @param  {WebhookProps} props  - a properties object
   * @param  {AuthCredentials} auth
   * @return {APIResponse}
   */
  update(webhookId, props, auth) {
    const url = this.getFullURL('webhooks', webhookId);
    return this.getAuthenticationHeaders(auth).then(this.validateAuth).then((authHeaders) => {
      return this.validateProps(props).then((validatedProps) => {
        return http('PUT', url, props, authHeaders);
      });
    });
  }

  /**
   * Deletes a webhook
   * @param  {string} webhookId - an id
   * @param  {AuthCredentials} auth
   * @return {APIResponse}
   */
  delete(webhookId, auth) {
    const url = this.getFullURL('webhooks', webhookId);
    return this.getAuthenticationHeaders(auth).then(this.validateAuth).then((authHeaders) => {
      return http('DELETE', url, undefined, authHeaders);
    });
  }
}
