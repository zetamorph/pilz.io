import { Component } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Vote } from './vote.entity';

@Component()
export class VoteService {
  constructor(
    @InjectRepository(Vote)
    private readonly voteRepository: Repository<Vote>,
  ) {}

  async findAll(): Promise<Vote[]> {
    return await this.voteRepository.find();
  }

  async findById(id: string): Promise<Vote> {
    return await this.voteRepository.findOneById(id);
  }

  async create(vote: Vote): Promise<Vote> {
    return await this.voteRepository.save(vote);
  }
}