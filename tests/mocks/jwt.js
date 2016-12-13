const jwt = require('jsonwebtoken');

export function testJwt() {
    return jwt.sign({
        scope: 'appUser'
    }, 'secret', {
        headers: {
            kid: 'keyid'
        }
    });
}
