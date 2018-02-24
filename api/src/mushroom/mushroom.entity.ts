import { Entity, Column, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from '../base/base.entity';
import { User } from '../user/user.entity';
import { Proposal } from '../proposal/proposal.entity';

@Entity()
export class Mushroom extends BaseEntity {
  @Column()
  proposedName: string;

  @Column('simple-array')
  imageUrls: string[];

  @ManyToOne(type => User, user => user.mushrooms)
  user: User;

  @OneToMany(type => Proposal, proposal => proposal.mushroom)
  proposals: Proposal[];
}