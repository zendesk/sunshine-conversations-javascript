import urljoin from 'urljoin';

export class BaseAPI {
  constructor(props) {
    this.root = props.root;
  }

  getAuthenticationHeaders(props = {}) {
    if (props.appToken) {
      return Promise.resolve({
        'app-token': props.appToken
      });
    } else if (props.jwt) {
      return Promise.resolve({
        'Authorization': 'Bearer ' + props.jwt
      });
    }

    return Promise.reject(new Error('Must provide authentication information.'));
  }

  getFullURL() {
    const fragments = Array.from(arguments).map((fragment) => encodeURIComponent(fragment));
    return urljoin(this.root.serverURL, ...fragments);
  }
}
