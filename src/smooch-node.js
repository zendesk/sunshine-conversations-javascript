import AppUsersAPI from './api/appUsers';
import ConversationsAPI from './api/conversations';

const SERVER_URL = 'https://api.smooch.io/v1';

export default class Smooch {
  constructor(serverURL = SERVER_URL) {
    this.serverURL = serverURL;

    this.appUsers = new AppUsersAPI({
      root: this
    });

    this.conversations = new ConversationsAPI({
      root: this
    });
  }
}
