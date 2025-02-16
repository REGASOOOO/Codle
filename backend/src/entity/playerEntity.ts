import {
  Entity,
  PrimaryKey,
  Property,
  SerializedPrimaryKey,
} from '@mikro-orm/core';
import { ObjectId } from '@mikro-orm/mongodb';

@Entity()
export class PlayerEntity {
  @PrimaryKey()
  _id!: ObjectId;

  @SerializedPrimaryKey()
  id!: string;

  @Property()
  name!: string;

  @Property()
  age!: number;

  @Property()
  position!: string;

  @Property({ nullable: true })
  previousteam?: string;

  @Property()
  currentTeam!: string;

  @Property()
  earnings!: number;

  constructor(
    name: string,
    age: number,
    position: string,
    previousteam: string,
    currentTeam: string,
    earnings: number,
  ) {
    this.name = name;
    this.age = age;
    this.position = position;
    this.previousteam = previousteam;
    this.currentTeam = currentTeam;
    this.earnings = earnings;
  }
}
