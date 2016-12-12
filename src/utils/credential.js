import * as jwt from './jwt';
import { decode } from 'jsonwebtoken';

function jwtHeader(jwt) {
    return {
        'Authorization': 'Bearer ' + jwt
    };
}

function isCredential(auth) {
    return auth.scope && auth.authHeaders;
}

export default function credential(auth) {
    if (!auth) {
        throw new Error('Missing auth parameter.');
    }

    if (isCredential(auth)) {
        return auth;
    }

    if (auth.keyId || auth.secret) {
        if (!auth.scope) {
            throw new Error('Invalid auth: missing scope.');
        }

        if (!auth.keyId) {
            throw new Error('Invalid auth: missing keyId.');
        }

        if (!auth.secret) {
            throw new Error('Invalid auth: missing secret.');
        }
    }
    
    const cred = {};

    if (auth.keyId && auth.secret && auth.scope) {
        const jwtBody = {
            scope: auth.scope
        };

        if (auth.userId) {
            jwtBody.userId = auth.userId;
        }

        cred.scope = auth.scope;
        cred.authHeaders = jwtHeader(jwt.generate(jwtBody, auth.secret, auth.keyId));
    } else if (auth.jwt) {
        const decoded = decode(auth.jwt);
        if (!decoded) {
            throw new Error('Provided JWT is malformed');
        }

        if (!decoded.scope) {
            throw new Error('Provided JWT has no scope specified');
        }

        cred.scope = decoded.scope;
        cred.authHeaders = jwtHeader(auth.jwt);
    } else if (auth.appToken) {
        cred.scope = 'appUser';
        cred.authHeaders = {
            'app-token': auth.appToken
        };
    } else {
        throw new Error('Invalid auth options');
    }

    return cred;
}
