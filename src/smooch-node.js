import { Smooch as SmoochBase } from './smooch';
import { WebhooksApi } from './api/webhooks';
import * as jwt from './utils/jwt';

export class Smooch extends SmoochBase {
  constructor(serverURL) {
    super(serverURL);

    this.webhooks = new WebhooksApi({
      root: this
    });

    Object.assign(this.utils, {
      jwt
    });
  }
}
