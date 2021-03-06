import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';
@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = (await this.usersService.findOne(username)).toObject();
    if (user && (await compare(pass, user.password))) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.email };
    return this._generateTokens(payload);
  }

  async refresh(refresh_token: string) {
    const payload = this.jwtService.verify(refresh_token);
    return this._generateTokens(payload);
  }

  private _generateTokens(payload: any) {
    return {
      email: payload.email,
      access_token: this.jwtService.sign(payload),
      refresh_token: this.jwtService.sign(payload, {
        expiresIn: '1h',
      }),
      iat: Date.now(),
      exp: Date.now() + 60 * 60 * 1000,
    };
  }
}
