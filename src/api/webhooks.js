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

    /**
     * Validates the properties sent to the API
     * @memberof WebhooksApi.prototype
     * @method validateProps
     * @param  {WebhookProps}  props      - a properties object
     * @param  {boolean} isTargetRequired - tells if the target property is required (i.e., on creation) [default = false]
     * @return {WebhookProps}             - the properties object passed in parameter
     */
    validateProps(props, isTargetRequired = false) {
        if (!props || Object.keys(props).length === 0) {
            throw new Error('Must provide props.');
        }

        if (isTargetRequired && !props.target) {
            throw new Error('Must provide a target.');
        }

        if (props.target && !props.target.startsWith('http://') && !props.target.startsWith('https://')) {
            throw new Error('Malformed target url.');
        }
    }
}

Object.assign(WebhooksApi.prototype, {
    /**
     * List all webhooks
     * @memberof WebhooksApi.prototype
     * @method list
     * @return {APIResponse}
     */
    list: smoochMethod({
        params: [],
        path: '/webhooks',
        method: 'GET'
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
        path: '/webhooks',
        func: function create(url, props) {
            this.validateProps(props, true);
            return this.request('POST', url, props);
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
        path: '/webhooks/:webhookId',
        method: 'GET'
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
        path: '/webhooks/:webhookId',
        func: function update(url, webhookId, props) {
            this.validateProps(props);
            return this.request('PUT', url, props);
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
        path: '/webhooks/:webhookId',
        method: 'DELETE'
    })
});
