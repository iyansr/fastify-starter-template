import { signJwt } from '../utils/jwt';

export class AuthService {
  async login(email: string, password: string) {
    return {
      email,
      password,
      token: await signJwt({ userId: '123' })
    };
  }
}

export const authService = new AuthService();
