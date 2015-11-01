import SmoochBase from './smooch';
import WebhooksAPI from './api/webhooks';
import * as jwt from './utils/jwt';

export default class Smooch extends SmoochBase {
  constructor(serverURL) {
    super(serverURL);

    this.webhooks = new WebhooksAPI({
      root: this
    });

    Object.assign(this.utils, {
      jwt
    });
  }
}
