import urljoin from 'urljoin';

export default class BaseAPI {
  constructor(props) {
    this.root = props.root;
  }

  getAuthenticationHeaders(props) {
    if (props.appToken) {
      return {
        'app-token': props.appToken
      };
    } else if (props.jwt) {
      return {
        'Authorization': 'Bearer ' + props.jwt
      };
    }

    return {};
  }

  getFullURL() {
    const fragments = Array.from(arguments).map((fragment) => encodeURIComponent(fragment));
    return urljoin(this.root.serverURL, ...fragments);
  }
}
