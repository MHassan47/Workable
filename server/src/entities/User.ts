import { Field, Int, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Job } from "./Job";
@ObjectType()
@Entity("users")
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field(() => String)
  firstName: string;

  @Column()
  @Field(() => String)
  lastName: string;

  @Column({ unique: true })
  @Field(() => String)
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Job, (job) => job.creator)
  myJob: Array<Job>;

  @ManyToMany("Job", (job: Job) => job.user, { cascade: true })
  @JoinTable()
  job: Array<Job>;
}
