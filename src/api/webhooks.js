import { BaseApi } from './base';
import { http } from '../utils/http';

/**
 * Webhook properties
 * @typedef WebhookProps
 */

/**
 * @class WebhooksApi
 * @extends BaseApi
 */
export class WebhooksApi extends BaseApi {

  constructor() {
    super(...arguments);
    this.allowedAuth = ['jwt'];
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
  list() {
    const url = this.getFullURL('webhooks');
    return this.validateAuthHeaders().then((authHeaders) => {
      return http('GET', url, {}, authHeaders);
    });
  }

  /**
   * Creates a webhook
   * @param  {WebhookProps} props - a properties object
   * @return {APIResponse}
   */
  create(props) {
    const url = this.getFullURL('webhooks');
    return this.validateAuthHeaders().then((authHeaders) => {
      return this.validateProps(props, true).then((validatedProps) => {
        return http('POST', url, validatedProps, authHeaders);
      });
    });
  }

  /**
   * Retrieves a webhook
   * @param  {string} webhookId - an id
   * @return {APIResponse}
   */
  get(webhookId) {
    const url = this.getFullURL('webhooks', webhookId);
    return this.validateAuthHeaders().then((authHeaders) => {
      return http('GET', url, {}, authHeaders);
    });
  }

  /**
   * Updates a webhook
   * @param  {string} webhookId    - an id
   * @param  {WebhookProps} props  - a properties object
   * @return {APIResponse}
   */
  update(webhookId, props) {
    const url = this.getFullURL('webhooks', webhookId);
    return this.validateAuthHeaders().then((authHeaders) => {
      return this.validateProps(props).then((validatedProps) => {
        return http('PUT', url, props, authHeaders);
      });
    });
  }

  /**
   * Deletes a webhook
   * @param  {string} webhookId - an id
   * @return {APIResponse}
   import { getAuthenticationHeaders } from '../../../src/utils/auth';
   */
  delete(webhookId) {
    const url = this.getFullURL('webhooks', webhookId);
    return this.validateAuthHeaders().then((authHeaders) => {
      return http('DELETE', url, undefined, authHeaders);
    });
  }
}
