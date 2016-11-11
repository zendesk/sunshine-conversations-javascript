import { Smooch as SmoochBase } from './smooch';
import { WebhooksApi } from './api/webhooks';
import { MenuApi } from './api/menu';
import * as jwt from './utils/jwt';

export class Smooch extends SmoochBase {
    constructor(auth = {}, options = {}) {
        if (auth.keyId || auth.secret) {
            if (!auth.scope) {
                throw new Error('Invalid auth: missing scope.');
            }

            if (!auth.keyId) {
                throw new Error('Invalid auth: missing keyId.');
            }

            if (!auth.secret) {
                throw new Error('Invalid auth: missing secret.');
            }
        }

        if (auth.keyId && auth.secret && auth.scope) {
            const jwtBody = {
                scope: auth.scope
            };

            if (auth.userId) {
                jwtBody.userId = auth.userId;
            }

            auth = {
                jwt: jwt.generate(jwtBody, auth.secret, auth.keyId)
            };
        }

        super(auth, options);

        this.webhooks = new WebhooksApi(this.serviceUrl, this.authHeaders, this.headers);
        this.menu = new MenuApi(this.serviceUrl, this.authHeaders, this.headers);

        Object.assign(this.utils, {
            jwt
        });
    }
}
