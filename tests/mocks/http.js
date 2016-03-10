import sinon from 'sinon';
const httpModule = require('../../src/utils/http');

const sandbox = sinon.sandbox.create();

export function mock() {
    return sandbox.stub(httpModule, 'http', () => {
        return Promise.resolve();
    });
}

export const restore = sandbox.restore.bind(sandbox);
