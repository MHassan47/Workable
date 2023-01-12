import { Field, Int, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./User";
@ObjectType()
@Entity("jobs")
export class Job extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field(() => String)
  company: string;

  @Column()
  @Field(() => String)
  title: string;

  @Column()
  @Field(() => String)
  description: string;

  @Column()
  @Field(() => Int)
  salaryMinimum: number;

  @Column()
  @Field(() => Int)
  salaryMaximum: number;

  @Column()
  @Field(() => String)
  location: string;

  @ManyToOne(() => User, (user: User) => user.myJob, { cascade: true })
  @JoinColumn({ name: "owner_id" })
  creator: User;

  @ManyToMany(() => User, (user: User) => user.job)
  user: Array<User>;
}
