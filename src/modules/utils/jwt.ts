import jwt from 'jsonwebtoken';

import { env } from '@/modules/config/env';

export async function signJwt(payload: object): Promise<string | undefined> {
  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      env.jwt.secret as jwt.Secret,
      {
        algorithm: 'HS256',
        expiresIn: env.jwt.expiresIn as jwt.SignOptions['expiresIn']
      },
      (err, token) => {
        if (err) reject(err);
        resolve(token);
      }
    );
  });
}

export async function verifyJwt<T>(token: string): Promise<T | undefined> {
  return new Promise((resolve, reject) => {
    jwt.verify(token, env.jwt.secret as jwt.Secret, (err, decoded) => {
      if (err) reject(err);
      resolve(decoded as T);
    });
  });
}
