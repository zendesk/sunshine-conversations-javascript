import { AppsApi } from './api/apps';
import { MenuApi } from './api/menu';
import { StripeApi } from './api/stripe';
import { AppUsersApi } from './api/appUsers';
import { DisabledApi } from './api/disabled';
import { WebhooksApi } from './api/webhooks';
import { AttachmentsApi } from './api/attachments';
import { IntegrationsApi } from './api/integrations';
import { ConversationsApi } from './api/conversations';
import { ServiceAccountsApi } from './api/serviceAccounts';

import { getAuthenticationHeaders } from './utils/auth';

import * as jwt from './utils/jwt';
import { decode } from 'jsonwebtoken';

import packageInfo from '../package.json';

const SERVICE_URL = 'https://api.smooch.io';

if (!global.FormData) {
    global.FormData = require('form-data');
}

class Smooch {
    constructor(options = {}) {
        const {serviceUrl = SERVICE_URL, httpAgent} = options;
        const auth = {
            keyId: options.keyId,
            secret: options.secret,
            scope: options.scope,
            jwt: options.jwt,
            userId: options.userId
        };

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

            auth.jwt = jwt.generate(jwtBody, auth.secret, auth.keyId);
        } else if (auth.jwt) {
            const decoded = decode(auth.jwt);
            if (!decoded) {
                throw new Error('jwt is malformed.');
            }
            if (!decoded.scope) {
                throw new Error('jwt has no scope defined.');
            }
            auth.scope = decoded.scope;
        }

        this.httpAgent = httpAgent;
        this.serviceUrl = serviceUrl;
        this.VERSION = packageInfo.version;
        this.scope = auth.scope;
        this.authHeaders = getAuthenticationHeaders(auth);
        this.utils = {};

        this.menu = new MenuApi(this);
        this.webhooks = new WebhooksApi(this);
        this.attachments = new AttachmentsApi(this);
        this.appUsers = new AppUsersApi(this);
        this.conversations = new ConversationsApi(this);
        this.stripe = new StripeApi(this);

        if (this.scope === 'account') {
            this.integrations = new IntegrationsApi(this);
            this.apps = new AppsApi(this);
            this.appUsers = new AppUsersApi(this);
            this.conversations = new ConversationsApi(this);
            this.stripe = new StripeApi(this);
            this.serviceAccounts = new ServiceAccountsApi(this);
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
