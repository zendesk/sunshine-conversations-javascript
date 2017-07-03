import { BaseApi } from './base';
import { AppKeysApi } from './appKeys';
import smoochMethod from '../utils/smoochMethod';

/**
 * @constructor
 * @name AttachmentsApi
 * @extends BaseApi
 */
export class AttachmentsApi extends BaseApi {
    constructor() {
        super(...arguments);
        this.allowedAuth = ['jwt'];

        this.keys = new AppKeysApi(...arguments);
    }
}

Object.assign(AttachmentsApi.prototype, {
    /**
     * Create an attachment
     * @memberof AttachmentsApi.prototype
     * @method create
     * @param  {string} access
     * @param  {Readable} source
     * @return {APIResponse}
     */
    create: smoochMethod({
        params: ['source', 'access'],
        path: '/attachments',
        func: function create(url, access, source) {
            const data = new FormData();
            data.append('source', source);

            url += `?access=${access}`;

            return this.request('POST', url, data);
        }
    })
});
