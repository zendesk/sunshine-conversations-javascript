import 'isomorphic-fetch';

/**
 * API Response promise - resolves with the requested resource
 * @typedef APIResponse
 * @type { Promise }
 */


/**
 * Stringifies query parameters and append them to the url
 * @param  {string} url  - an url
 * @param  {object} data - an object containing the query parameters
 * @return {string}      - the final url
 */
export function stringifyGETParams(url, data) {
  let query = '';

  for (var key in Object.keys(data)) {
    if (data[key] !== null) {
      query += '&' + encodeURIComponent(key) + '=' + encodeURIComponent(data[key]);
    }
  }
  if (query) {
    url += (~url.indexOf('?') ? '&' : '?') + query.substring(1);
  }
  return url;
}

export function handleStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  var error = new Error(response.statusText);
  error.response = response;

  throw error;
}

export function handleBody(response) {
  if (response.status === 202 || response.status === 204) {
    return;
  }

  return response.json();
}

export function http(method, url, data, headers = {}) {
  method = method.toUpperCase();

  let fetchOptions = {
    method: method,
    headers: Object.assign({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }, headers)
  };

  if (data) {
    data = Object.assign({}, data);

    if (method === 'GET') {
      url = stringifyGETParams(url, data);
    } else if (method === 'POST' || method === 'PUT') {
      fetchOptions.body = JSON.stringify(data);
    }
  }

  return fetch(url, fetchOptions)
    .then(handleStatus)
    .then(handleBody);
}
