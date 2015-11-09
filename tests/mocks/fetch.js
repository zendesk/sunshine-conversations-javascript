import 'isomorphic-fetch';

const sandbox = sinon.sandbox.create();

export function mock(status = 200, json = {}, statusText = '') {
  return sandbox.stub(global, 'fetch', () => {
    return Promise.resolve({
      status: status,
      json: () => json,
      statusText: statusText
    });
  });
}

export const restore = sandbox.restore.bind(sandbox);
