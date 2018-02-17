
import { Component } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Mushroom } from './mushroom.entity';

@Component()
export class MushroomService {
  constructor(
    @InjectRepository(Mushroom)
    private readonly mushroomRepository: Repository<Mushroom>,
  ) {}

  async findAll(): Promise<Mushroom[]> {
    return await this.mushroomRepository.find();
  }

  async findById(id: string): Promise<Mushroom> {
    return await this.mushroomRepository.findOneById(id);
  }

  async create(mushroom: Mushroom): Promise<Mushroom> {
    return await this.mushroomRepository.save(mushroom);
  }
}