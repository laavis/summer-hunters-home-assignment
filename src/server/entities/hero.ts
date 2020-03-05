import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, OneToMany } from 'typeorm';
import { ObjectType, ID, Field } from 'type-graphql';
import { Lazy } from '../helpers';
import { Skill } from '../entities/skill';
import { TElement } from '../types/element';
import { Attribute } from './attribute';

@Entity()
@ObjectType()
export class Hero {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  imgUrl: string;

  @Field()
  @Column()
  description: string;

  @Field()
  @Column()
  backStory: string;

  @Field(() => [Skill])
  @ManyToMany(() => Skill, { lazy: true, cascade: ['insert'] })
  @JoinTable()
  skills: Lazy<Skill[]>;

  @Field(() => [Attribute])
  @ManyToMany(() => Attribute, { lazy: true, cascade: ['insert'] })
  @JoinTable()
  attributes: Lazy<Attribute[]>;

  /**
   * This section consists of hero attributes. It is your job to normalize this data into attribute entity (table) and create relationship between hero and his attributes.
   * You can decide how you create the relationship. After this is done, you can insert that data into database with seedDatabase function in /server/helpers.ts and rebooting app.
   */

  @Field()
  @Column()
  resistance: TElement;

  @Field()
  @Column()
  weakness: TElement;

  @Field()
  @Column()
  healthpoints: number;

  @Field()
  @Column()
  mana: number;
}
