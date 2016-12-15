import { getAuthenticationHeaders } from './utils/auth';
import { AppUsersApi } from './api/appUsers';
import { ConversationsApi } from './api/conversations';
import { StripeApi } from './api/stripe';
import packageInfo from '../package.json';

export const SERVICE_URL = 'https://api.smooch.io/v1';

export class Smooch {
    constructor(auth = {}, options = {}) {
        const {serviceUrl = SERVICE_URL, headers = {}} = options;
        this.VERSION = packageInfo.version;
        this.serviceUrl = serviceUrl;
        this.scope = 'appUser';

        if (auth.keyId || auth.secret) {
            throw new Error('Key Id or Secret should not be used on the browser side. You must generate a JWT beforehand.');
        }

        this.headers = headers;
        this.authHeaders = getAuthenticationHeaders(auth);

        this.appUsers = new AppUsersApi(this.serviceUrl, this.authHeaders, this.headers);
        this.conversations = new ConversationsApi(this.serviceUrl, this.authHeaders, this.headers);
        this.stripe = new StripeApi(this.serviceUrl, this.authHeaders, this.headers);

        this.utils = {};
    }
}
