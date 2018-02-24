import { Entity, Column, ManyToOne } from 'typeorm';
import { User } from '../user/user.entity';
import { BaseEntity } from '../base/base.entity';
import { Proposal } from '../proposal/proposal.entity';

@Entity()
export class Vote extends BaseEntity {
  @Column()
  userId: string;

  @Column()
  mushroomId: string;

  @ManyToOne(type => User, user => user.votes)
  user: User;

  @ManyToOne(type => Proposal, proposal => proposal.votes)
  proposal: Proposal;
}