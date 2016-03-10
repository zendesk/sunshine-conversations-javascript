const jwt = require('jsonwebtoken');

export function generate(body, secret, keyId) {
    return jwt.sign(body, secret, {
        headers: {
            kid: keyId
        }
    });
}
