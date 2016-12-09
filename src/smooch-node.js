import { Smooch as SmoochBase } from './smooch';
import { WebhooksApi } from './api/webhooks';
import { MenuApi } from './api/menu';
import * as jwt from './utils/jwt';
import credential from './utils/credential';

export class Smooch extends SmoochBase {
    constructor(auth = {}, options = {}) {
        super(credential(auth), options);

        this.webhooks = new WebhooksApi(this.serviceUrl, this.authHeaders, this.headers);
        this.menu = new MenuApi(this.serviceUrl, this.authHeaders, this.headers);

        Object.assign(this.utils, {
            jwt
        });
    }
}
