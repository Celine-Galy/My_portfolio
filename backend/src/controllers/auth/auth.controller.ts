import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from 'src/guards/auth.guards';
import { AuthService } from 'src/services/auth/auth.service';
import { Public } from 'src/utils/public.decorator';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: Record<string, any>) {
    return this.authService.signIn(signInDto.username, signInDto.password);
  }
  @Public()
  @HttpCode(HttpStatus.CREATED)
  @Post('register')
  create(@Body() user: Record<string, any>) {
    return this.authService.create(user);
  }

  @UseGuards(AuthGuard)
  @HttpCode(HttpStatus.OK)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
