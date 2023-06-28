import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async signIn(username: string, pass: string) {
    const user = await this.usersService.findOne(username);
    console.log('here', user);
    if (!user) {
      console.log('user not found');
      throw new UnauthorizedException();
    }
    if (user && (await bcrypt.compare(pass, user.password))) {
      console.log('user found and pass ok');
      const payload = {
        id: user.id,
        username: user.username,
        admin: user.admin,
      };
      return {
        access_token: await this.jwtService.signAsync(payload),
      };
    } else {
      console.log('user found but pass not ok');
      throw new UnauthorizedException();
    }
  }

  async create(userCreated: any) {
    const { username, password } = userCreated;
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(password, salt);
    const user = await this.usersService.create({
      username,
      password: hash,
    });
    if (await this.usersService.findOne(user.username)) {
      throw new UnauthorizedException();
    }
    return await this.usersService.create(user);
  }

  async getProfile(username: string) {
    return await this.usersService.findOne(username);
  }
}
