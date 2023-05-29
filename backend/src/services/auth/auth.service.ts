import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(username: string, pass: string) {
    const user = await this.usersService.findOne(username);
    console.log(user);
    if (!user) {
      throw new UnauthorizedException();
    }

    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    const payload = { id: user.id, username: user.username };
    console.log(payload);
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}