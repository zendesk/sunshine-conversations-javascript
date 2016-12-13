import { sign } from 'jsonwebtoken';

export function testJwt(scope = 'appUser') {
    return sign({
        scope
    }, 'secret', {
        headers: {
            kid: 'keyid'
        }
    });
}
