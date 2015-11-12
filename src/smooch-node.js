import { Smooch as SmoochBase } from './smooch';
import { WebhooksApi } from './api/webhooks';
import * as jwt from './utils/jwt';

export class Smooch extends SmoochBase {
  constructor(auth = {}, serviceUrl) {
    if (auth.keyId && auth.secret && auth.scope) {
      let jwtBody = {
        scope: auth.scope
      };

      if (auth.userId) {
        jwtBody.userId = auth.userId
      }

      auth = {
        jwt: jwt.generate(jwtBody, auth.secret, auth.keyId)
      };
    }

    super(auth, serviceUrl);

    this.webhooks = new WebhooksApi(this.serviceUrl, this.authHeaders);

    Object.assign(this.utils, {
      jwt
    });
  }
}
