import { Entity, Column, OneToMany } from 'typeorm';
import { Mushroom } from '../mushroom/mushroom.entity';
import { Vote } from '../votes/vote.entity';
import { BaseEntity } from '../base/base.entity';
import { Proposal } from '../proposal/proposal.entity';

@Entity()
export class User extends BaseEntity {
  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  avatarUrl: string;

  @OneToMany(type => Mushroom, mushroom => mushroom.user)
  mushrooms: Mushroom[];

  @OneToMany(type => Proposal, proposal => proposal.user)
  proposals: Proposal[];

  @OneToMany(type => Vote, vote => vote.user)
  votes: Vote[];
}