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
import { UserService } from 'src/services/user/user.service';

@Controller('users')
export class UsersController {
  constructor(private service: UserService) {}

  @Get(':id')
  get(@Param('id') id: number) {
    return this.service.getUser(id);
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
