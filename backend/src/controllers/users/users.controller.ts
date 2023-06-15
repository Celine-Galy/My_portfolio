import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { User } from 'src/models/users/user.entity';
import { UsersService } from 'src/services/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private service: UsersService) {}

  @Get(':id')
  get(@Param() params) {
    return this.service.getUser(params.id);
  }
  @Get()
  getUsers() {
    return this.service.getUsers();
  }
  @Post()
  create(@Body() user: User) {
    return this.service.createUser(user);
  }
  @Put()
  update(@Body() user: User) {
    return this.service.updateUser(user);
  }
  @Delete(':id')
  deleteUser(@Param() params) {
    return this.service.deleteUser(params.id);
  }
}
