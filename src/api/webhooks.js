import { BaseApi } from './base';

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
        return this.request('GET', url);
    }

    /**
     * Creates a webhook
     * @param  {WebhookProps} props - a properties object
     * @return {APIResponse}
     */
    create(props) {
        const url = this.getFullURL('webhooks');
        return this.validateProps(props, true).then((validatedProps) => {
            return this.request('POST', url, validatedProps);
        });
    }

    /**
     * Retrieves a webhook
     * @param  {string} webhookId - an id
     * @return {APIResponse}
     */
    get(webhookId) {
        const url = this.getFullURL('webhooks', webhookId);
        return this.request('GET', url);
    }

    /**
     * Updates a webhook
     * @param  {string} webhookId    - an id
     * @param  {WebhookProps} props  - a properties object
     * @return {APIResponse}
     */
    update(webhookId, props) {
        const url = this.getFullURL('webhooks', webhookId);
        return this.validateProps(props).then((validatedProps) => {
            return this.request('PUT', url, validatedProps);
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
        return this.request('DELETE', url);
    }
}
