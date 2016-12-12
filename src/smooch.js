import credential from './utils/credential';
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

        if (auth.keyId || auth.secret) {
            throw new Error('Key Id or Secret should not be used on the browser side. You must generate a JWT beforehand.');
        }

        this.credential = credential(auth);
        this.headers = headers;
        const authHeaders = this.credential.authHeaders;

        this.appUsers = new AppUsersApi(this.serviceUrl, authHeaders, this.headers);
        this.conversations = new ConversationsApi(this.serviceUrl, authHeaders, this.headers);
        this.stripe = new StripeApi(this.serviceUrl, authHeaders, this.headers);

        this.utils = {};
    }
}
