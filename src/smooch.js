import { AppUsersAPI } from './api/appUsers';
import { ConversationsAPI } from './api/conversations';
import packageInfo from '../package.json';

const SERVER_URL = 'https://api.smooch.io/v1';

export class Smooch {
  constructor(serverURL = SERVER_URL) {
    this.VERSION = packageInfo.version;
    this.serverURL = serverURL;

    this.appUsers = new AppUsersAPI({
      root: this
    });

    this.conversations = new ConversationsAPI({
      root: this
    });

    this.utils = {};
  }
}
