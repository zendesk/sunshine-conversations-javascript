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
     * @param  {Object|string} queryParams
     * @param  {Readable} source
     * @return {APIResponse}
     */
    create: smoochMethod({
        params: ['props', 'source'],
        path: '/attachments',
        func: function create(url, queryParamsOrAccess, source) {
            const data = new FormData();
            data.append('source', source);

            // back compat, this is the access param
            if (typeof queryParamsOrAccess === 'string') {
                url += `?access=${queryParamsOrAccess}`;
            } else {
                const {access, for: attachmentFor, userId, appUserId} = queryParamsOrAccess;
                url += `?access=${access}`;

                if (attachmentFor) {
                    url += `&for=${attachmentFor}`;
                }

                if (userId) {
                    url += `&userId=${userId}`;
                }

                if (appUserId) {
                    url += `&appUserId=${appUserId}`;
                }
            }

            return this.request('POST', url, data);
        }
    }),

    /**
     * Remove an attachment
     * @memberof AttachmentsApi.prototype
     * @method delete
     * @param  {string} mediaUrl
     * @return {APIResponse}
     */
    delete: smoochMethod({
        params: ['mediaUrl'],
        path: '/attachments/remove',
        func: function deleteAttachment(url, mediaUrl) {
            return this.request('POST', url, {
                mediaUrl
            });
        }
    })
});
