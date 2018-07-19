import { BaseApi } from './base';
import { AppKeysApi } from './appKeys';
import smoochMethod from '../utils/smoochMethod';

/**
 * @constructor
 * @name TemplatesApi
 * @extends BaseApi
 */
export class TemplatesApi extends BaseApi {
    constructor() {
        super(...arguments);
        this.allowedAuth = ['jwt'];

        this.keys = new AppKeysApi(...arguments);
    }
}

Object.assign(TemplatesApi.prototype, {
    /**
     * Create a template
     * @memberof TemplatesApi.prototype
     * @method create
     * @param  {Object} props
     * @return {APIResponse}
     */
    create: smoochMethod({
        params: ['props'],
        path: '/templates',
        func: function create(url, props) {
            if (!props) {
                return Promise.reject(new Error('Must provide props.'));
            }

            if (!props.name) {
                return Promise.reject(new Error('Must provide name for your template.'));
            }

            if (!props.message) {
                return Promise.reject(new Error('Must provide message for your template.'));
            }

            return this.request('POST', url, props);
        }
    }),

    /**
     * List templates
     * @memberof TemplatesApi.prototype
     * @method list
     * @param  {Object} props
     * @return {APIResponse}
     */
    list: smoochMethod({
        params: ['props'],
        optional: ['props'],
        path: '/templates',
        func: function list(url, props = {}) {
            const queryParams = {
                limit: props.limit,
                offset: props.offset
            };

            let paramAdded = false;

            Object.keys(queryParams).forEach((paramKey) => {
                const param = queryParams[paramKey];

                if (param === undefined) {
                    return;
                }

                if (!paramAdded) {
                    url += `?${paramKey}=${queryParams[paramKey]}`;
                } else {
                    url += `&${paramKey}=${queryParams[paramKey]}`;
                }

                paramAdded = true;
            });

            return this.request('GET', url);
        }
    }),

    /**
     * Get a template
     * @memberof TemplatesApi.prototype
     * @method get
     * @return {APIResponse}
     */
    get: smoochMethod({
        params: ['templateId'],
        path: '/templates/:templateId',
        method: 'GET'
    }),

    /**
     * Update a template
     * @memberof TemplatesApi.prototype
     * @method update
     * @param  {Object} props
     * @return {APIResponse}
     */
    update: smoochMethod({
        params: ['templateId', 'props'],
        path: '/templates/:templateId',
        func: function create(url, templateId, props) {
            if (!props) {
                return Promise.reject(new Error('Must provide props.'));
            }

            if (!props.name && !props.message) {
                return Promise.reject(new Error('Must provide either name or message to update.'));
            }

            return this.request('PUT', url, props);
        }
    }),

    /**
     * Delete a template
     * @memberof TemplatesApi.prototype
     * @method delete
     * @return {APIResponse}
     */
    delete: smoochMethod({
        params: ['templateId'],
        path: '/templates/:templateId',
        method: 'DELETE'
    })
});
