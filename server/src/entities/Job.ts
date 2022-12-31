import { Field, Int, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
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

  @Column("int", { default: 0 })
  tokenVersion: number;
}
