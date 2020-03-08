import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, ID, Field } from 'type-graphql';
import { Lazy } from '../helpers';
import { Hero } from './hero';

@Entity()
@ObjectType()
export class Attribute {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToMany(() => Hero, { lazy: true })
  heroes: Lazy<Hero[]>;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  value: number;
}
