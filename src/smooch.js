import { AppUsersApi } from './api/appUsers';
import { ConversationsApi } from './api/conversations';
import packageInfo from '../package.json';

const SERVICE_URL = 'https://api.smooch.io/v1';

export class Smooch {
  constructor(serviceUrl = SERVICE_URL) {
    this.VERSION = packageInfo.version;
    this.serviceUrl = serviceUrl;

    this.appUsers = new AppUsersApi({
      root: this
    });

    this.conversations = new ConversationsApi({
      root: this
    });

    this.utils = {};
  }
}
