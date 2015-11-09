import { AppUsersApi } from './api/appUsers';
import { ConversationsApi } from './api/conversations';
import packageInfo from '../package.json';

const SERVER_URL = 'https://api.smooch.io/v1';

export class Smooch {
  constructor(serverURL = SERVER_URL) {
    this.VERSION = packageInfo.version;
    this.serverURL = serverURL;

    this.appUsers = new AppUsersApi({
      root: this
    });

    this.conversations = new ConversationsApi({
      root: this
    });

    this.utils = {};
  }
}
