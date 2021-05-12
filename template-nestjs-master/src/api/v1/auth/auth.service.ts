import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  async login(): Promise<string> {
    return 'OK';
  }
}
