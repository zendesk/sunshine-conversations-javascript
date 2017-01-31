import { BaseApi } from './base';
import smoochMethod from '../utils/smoochMethod';

function transformProps(val) {
    if (typeof val === 'string') {
        return {
            name: val,
            type: 'string'
        };
    }

    return val;
}

/**
 * Init API properties
 * @typedef IntegrationProps
 */
function IntegrationType(required, optional = []) {
    //convert parameter string values to object
    this.required = required.map(transformProps);
    this.optional = optional.map(transformProps);
}

IntegrationType.prototype.validate = function(props) {
    const missing = this.required.filter((field) => {
        return !props[field.name];
    });

    if (missing.length > 0) {
        const keys = missing.map(function(val) {
            return val.name;
        });

        throw new Error(`integration has missing required keys: ${keys.join(', ')}`);
    }

    const both = [...this.required, ...this.optional];
    const invalid = [];

    both.forEach(function(val) {
        if (props[val.name] !== undefined && typeof props[val.name] !== val.type) {
            invalid.push(val);
        }
    });

    if (invalid.length > 0) {
        throw new Error(`integration has invalid types: ${JSON.stringify(invalid)}`);
    }
};

const integrations = {
    messenger: new IntegrationType(['pageAccessToken', 'appId', 'appSecret']),
    twilio: new IntegrationType(['accountSid', 'authToken', 'phoneNumberSid']),
    telegram: new IntegrationType(['token']),
    line: new IntegrationType(['channelAccessToken', 'channelSecret']),
    viber: new IntegrationType(['token']),
    wechat: new IntegrationType(['appId', 'appSecret'], ['encodingAesKey']),
    frontendEmail: new IntegrationType([], ['fromAddress']),
    fcm: new IntegrationType(['serverKey', 'senderId']),
    apn: new IntegrationType(['certificate'], [{
        name: 'autoUpdateBadge',
        type: 'boolean'
    }, 'password'])
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
