import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/models/users/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}
  async createUser(user: User) {
    return await this.usersRepository.save(user);
  }
  async getUsers(): Promise<User[]> {
    return await this.usersRepository.find();
  }
  async getUser(_id: number): Promise<User[]> {
    return await this.usersRepository.find({
      select: ['id', 'username', 'email', 'admin'],
      where: [{ id: _id }],
    });
  }
  async updateUser(user: User) {
    this.usersRepository.save(user);
  }
  async deleteUser(user: User) {
    this.usersRepository.delete(user);
  }

  async findOne(username: string): Promise<User | undefined> {
    const users = await this.usersRepository.find();
    return users.find((user) => user.username === username);
  }
  async create(user: any) {
    return await this.usersRepository.save(user);
  }
}
