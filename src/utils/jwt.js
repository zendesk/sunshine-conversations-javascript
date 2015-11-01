'use strict';
import jwt from 'jsonwebtoken';

export function generate(body, secret, keyId) {
  return jwt.sign(body, secret, {
    headers: {
      kid: keyId
    }
  });
}
