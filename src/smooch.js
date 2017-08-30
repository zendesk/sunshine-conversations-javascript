import { AppsApi } from './api/apps';
import { MenuApi } from './api/menu';
import { StripeApi } from './api/stripe';
import { AppUsersApi } from './api/appUsers';
import { DisabledApi } from './api/disabled';
import { WebhooksApi } from './api/webhooks';
import { AttachmentsApi } from './api/attachments';
import { IntegrationsApi } from './api/integrations';
import { ConversationsApi } from './api/conversations';

import { getAuthenticationHeaders } from './utils/auth';

import * as jwt from './utils/jwt';
import { decode } from 'jsonwebtoken';

import packageInfo from '../package.json';

const SERVICE_URL = 'https://api.smooch.io/v1';

if (!global.FormData) {
    global.FormData = require('form-data');
}

class Smooch {
    constructor(auth = {}, options = {}) {
        const {serviceUrl = SERVICE_URL, headers = {}, httpAgent} = options;

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
                jwt: jwt.generate(jwtBody, auth.secret, auth.keyId),
                scope: auth.scope
            };
        }

        if (auth.jwt) {
            const decoded = decode(auth.jwt);
            if (!decoded) {
                throw new Error('jwt is malformed.');
            }
            if (!decoded.scope) {
                throw new Error('jwt has no scope defined.');
            }
            auth.scope = decoded.scope;
        }

        this.headers = headers;
        this.httpAgent = httpAgent;
        this.serviceUrl = serviceUrl;
        this.VERSION = packageInfo.version;
        this.scope = auth.scope || 'appUser';
        this.authHeaders = getAuthenticationHeaders(auth);

        this.utils = {};

        const isAccountScope = this.scope === 'account';

        this.menu = new MenuApi(this.serviceUrl, this.authHeaders, this.headers, isAccountScope, this.httpAgent);
        this.webhooks = new WebhooksApi(this.serviceUrl, this.authHeaders, this.headers, isAccountScope, this.httpAgent);
        this.attachments = new AttachmentsApi(this.serviceUrl, this.authHeaders, this.headers, isAccountScope, this.httpAgent);
        this.appUsers = new AppUsersApi(this.serviceUrl, this.authHeaders, this.headers, isAccountScope, this.httpAgent);
        this.conversations = new ConversationsApi(this.serviceUrl, this.authHeaders, isAccountScope, this.headers, this.httpAgent);
        this.stripe = new StripeApi(this.serviceUrl, this.authHeaders, this.headers, isAccountScope, this.httpAgent);

        if (this.scope === 'account') {
            this.integrations = new IntegrationsApi(this.serviceUrl, this.authHeaders, this.headers, true, this.httpAgent);
            this.apps = new AppsApi(this.serviceUrl, this.authHeaders, this.headers, true, this.httpAgent);
            this.appUsers = new AppUsersApi(this.serviceUrl, this.authHeaders, this.headers, true, this.httpAgent);
            this.conversations = new ConversationsApi(this.serviceUrl, this.authHeaders, this.headers, true, this.httpAgent);
            this.stripe = new StripeApi(this.serviceUrl, this.authHeaders, this.headers, true, this.httpAgent);
        } else {
            const disabled = new DisabledApi('This API requires account level scope');
            this.integrations = this.apps = disabled;
        }

        Object.assign(this.utils, {
            jwt
        });
    }
}

module.exports = Smooch;
