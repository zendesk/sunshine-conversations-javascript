import { BaseApi } from './base';
import smoochMethod from '../utils/smoochMethod';

/**
 * Webhook properties
 * @typedef WebhookProps
 */

/**
 * @constructor
 * @name WebhooksApi
 * @extends BaseApi
 */
export class WebhooksApi extends BaseApi {
    constructor() {
        super(...arguments);
        this.allowedAuth = ['jwt'];
    }
}

Object.assign(WebhooksApi.prototype, {
    /**
     * Validates the properties sent to the API
     * @memberof WebhooksApi.prototype
     * @method validateProps
     * @param  {WebhookProps}  props      - a properties object
     * @param  {boolean} isTargetRequired - tells if the target property is required (i.e., on creation) [default = false]
     * @return {WebhookProps}             - the properties object passed in parameter
     */
    validateProps: smoochMethod({
        params: ['props', 'isTargetRequired'],
        optional: ['isTargetRequired'],
        func: function validateProps(props, isTargetRequired = false) {
            if (!props || Object.keys(props).length === 0) {
                return Promise.reject(new Error('Must provide props.'));
            }

            if (isTargetRequired && !props.target) {
                return Promise.reject(new Error('Must provide a target.'));
            }

            if (props.target && !props.target.startsWith('http://') && !props.target.startsWith('https://')) {
                return Promise.reject(new Error('Malformed target url.'));
            }

            return Promise.resolve(props);
        }
    }),

    /**
     * List all webhooks
     * @memberof WebhooksApi.prototype
     * @method list
     * @return {APIResponse}
     */
    list: smoochMethod({
        params: [],
        func: function list() {
            const url = this.getFullURL('webhooks');
            return this.request('GET', url);
        }
    }),

    /**
     * Creates a webhook
     * @memberof WebhooksApi.prototype
     * @method create
     * @param  {WebhookProps} props - a properties object
     * @return {APIResponse}
     */
    create: smoochMethod({
        params: ['props'],
        func: function create(props) {
            const url = this.getFullURL('webhooks');
            return this.validateProps(props, true).then((validatedProps) => {
                return this.request('POST', url, validatedProps);
            });
        }
    }),

    /**
     * Retrieves a webhook
     * @memberof WebhooksApi.prototype
     * @method get
     * @param  {string} webhookId - an id
     * @return {APIResponse}
     */
    get: smoochMethod({
        params: ['webhookId'],
        func: function get(webhookId) {
            const url = this.getFullURL('webhooks', webhookId);
            return this.request('GET', url);
        }
    }),

    /**
     * Updates a webhook
     * @memberof WebhooksApi.prototype
     * @method update
     * @param  {string} webhookId    - an id
     * @param  {WebhookProps} props  - a properties object
     * @return {APIResponse}
     */
    update: smoochMethod({
        params: ['webhookId', 'props'],
        func: function update(webhookId, props) {
            const url = this.getFullURL('webhooks', webhookId);
            return this.validateProps(props).then((validatedProps) => {
                return this.request('PUT', url, validatedProps);
            });
        }
    }),

    /**
     * Deletes a webhook
     * @memberof WebhooksApi.prototype
     * @method delete
     * @param  {string} webhookId - an id
     * @return {APIResponse}
     */
    delete: smoochMethod({
        params: ['webhookId'],
        func: function del(webhookId) {
            const url = this.getFullURL('webhooks', webhookId);
            return this.request('DELETE', url);
        }
    })
});
