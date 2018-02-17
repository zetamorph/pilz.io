import { Component } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Component()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async findById(id: string): Promise<User> {
    return await this.userRepository.findOneById(id);
  }

  async create(user: User): Promise<User> {
    return await this.userRepository.save(user);
  }
}