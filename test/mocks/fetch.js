export function getMock(sinon, status = 200, json = {}, statusText = '', headers = {
        'Content-Type': 'application/json'
    }) {
    const stub = sinon.stub();

    stub.callsFake(() => {
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

    return stub;
}
