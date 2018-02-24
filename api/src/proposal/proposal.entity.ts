import { Entity, ManyToOne, Column, OneToMany } from 'typeorm';
import { BaseEntity } from '../base/base.entity';
import { Mushroom } from '../mushroom/mushroom.entity';
import { User } from '../user/user.entity';
import { Vote } from '../votes/vote.entity';

@Entity()
export class Proposal extends BaseEntity {
    @Column()
    name: string;

    @ManyToOne(type => User, user => user.proposals)
    user: User;

    @ManyToOne(type => Mushroom, mushroom => mushroom.proposals)
    mushroom: Mushroom;

    @OneToMany(type => Vote, vote => vote.proposal)
    votes: Vote[];
}