import Smooch from './smooch';
import WebhooksAPI from './api/webhooks';

export default class SmoochNode extends Smooch {
  constructor(serverURL) {
    super(serverURL);

    this.webhooks = new WebhooksAPI({
      root: this
    });
  }
}
