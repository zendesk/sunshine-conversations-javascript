import 'isomorphic-fetch';

/**
 * API Response promise - resolves with the requested resource
 * @typedef APIResponse
 * @type { Promise }
 */


function stringifyGETParams(url, data) {
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

function status(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  var error = new Error(response.statusText);
  error.response = response;

  throw error;
}

function json(response) {
  if (response.status === 202 || response.status === 204) {
    return;
  }

  return response.json();
}

export function http(method, url, data, headers = {}) {
  method = method.toUpperCase();

  var fetchOptions = {
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
    .then(status)
    .then(json);
}
