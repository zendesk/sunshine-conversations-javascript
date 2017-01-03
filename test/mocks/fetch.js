import 'isomorphic-fetch';
import sinon from 'sinon';

const sandbox = sinon.sandbox.create();

export function mock(status = 200, json = {}, statusText = '', headers = {
        'Content-Type': 'application/json'
    }) {
    return sandbox.stub(global, 'fetch', () => {
        return Promise.resolve({
            status: status,
            json: () => json,
            statusText: statusText,
            headers: {
                get: (header) => {
                    return headers[header];
                }
            }
        });
    });
}

export const restore = sandbox.restore.bind(sandbox);
