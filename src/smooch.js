import { AppUsersAPI } from './api/appUsers';
import { ConversationsAPI } from './api/conversations';
import packageInfo from '../package.json';

const SERVICE_URL = 'https://api.smooch.io/v1';

export class Smooch {
  constructor(serviceUrl = SERVICE_URL) {
    this.VERSION = packageInfo.version;
    this.serviceUrl = serviceUrl;

    this.appUsers = new AppUsersAPI({
      root: this
    });

    this.conversations = new ConversationsAPI({
      root: this
    });

    this.utils = {};
  }
}
