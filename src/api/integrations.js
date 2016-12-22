import { BaseApi } from './base';
import smoochMethod from '../utils/smoochMethod';

/**
 * Init API properties
 * @typedef IntegrationProps
 */

function IntegrationType(required, optional = []) {
    this.required = ['type', ...required];
    this.optional = optional;
}

IntegrationType.prototype.validate = function(props) {
    const missing = this.required.filter((field) => {
        return !props[field];
    });

    if (missing.length > 0) {
        throw new Error(`integration has missing required keys: ${missing.join(', ')}`);
    }

    const invalid = Object.keys(props).filter((k) => 'string' !== typeof props[k]);
    if (invalid.length > 0) {
        throw new Error(`integration has invalid types (expected string): ${invalid.join(', ')}`);
    }
};

const integrations = {
    messenger: new IntegrationType(['pageAccessToken', 'appId', 'appSecret']),
    twilio: new IntegrationType(['accountSid', 'authToken', 'phoneNumberSid']),
    telegram: new IntegrationType(['token']),
    line: new IntegrationType(['channelAccessToken', 'channelSecret']),
    viber: new IntegrationType(['token']),
    wechat: new IntegrationType(['appId', 'appSecret'], ['encodingAesKey']),
    frontendEmail: new IntegrationType([], ['fromAddress'])
};

/**
 * @constructor
 * @name IntegrationsApi
 * @extends BaseApi
 */
export class IntegrationsApi extends BaseApi {
    constructor() {
        super(...arguments);
        this.allowedAuth = ['jwt'];
    }

    validateProps(props) {
        if (!props.type) {
            throw new Error('props missing required field type');
        }

        const integrationType = integrations[props.type];
        if (!integrationType) {
            throw new Error(`Unrecognized type: ${props.type}`);
        }

        integrationType.validate(props);
    }
}

Object.assign(IntegrationsApi.prototype, {
    /**
     * Create a new integration
     * @memberof IntegrationsApi.prototype
     * @method create
     * @param  {IntegrationProps} props
     * @return {APIResponse}
     */
    create: smoochMethod({
        params: ['props'],
        path: '/integrations',
        func: function create(url, props) {
            this.validateProps(props);
            return this.request('POST', url, props);
        }
    }),

    /**
     * Fetch the integrations currently configured
     * @memberof IntegrationsApi.prototype
     * @method list
     * @param  {(string|string[])=} type - Filter results to a specific integration type
     * @return {APIResponse}
     */
    list: smoochMethod({
        params: ['types'],
        optional: ['types'],
        path: '/integrations',
        func: function list(url, types) {
            const query = {};
            if (typeof types === 'string') {
                query.types = types;
            } else if (types && types.constructor === Array) {
                query.types = types.filter((t) => typeof t === 'string')
                    .join(',') || undefined;
            }

            if (query.types) {
                return this.request('GET', url, query);
            } else {
                return this.request('GET', url);
            }
        }
    }),

    /**
     * Retrieve an existing integration
     * @memberof IntegrationsApi.prototype
     * @method get
     * @param  {stirng} integrationId
     * @return {APIResponse}
     */
    get: smoochMethod({
        params: ['integrationId'],
        path: '/integrations/:integrationId',
        method: 'GET'
    }),

    /**
     * Delete an existing integration
     * @memberof IntegrationsApi.prototype
     * @method delete
     * @param  {stirng} integrationId
     * @return {APIResponse}
     */
    delete: smoochMethod({
        params: ['integrationId'],
        path: '/integrations/:integrationId',
        method: 'DELETE'
    })
});
