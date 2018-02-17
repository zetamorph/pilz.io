import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Mushroom {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  proposedName: string;

  @Column('simple-array')
  imageUrls: string[];
}