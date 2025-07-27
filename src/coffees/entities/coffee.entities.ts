import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Flavor } from './flavor.entity';

@Entity() //sql table === 'coffee'  Entity括号内可以指定表名
export class Coffee {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  brand: string;
  @JoinTable()
  @ManyToMany(() => Flavor, (flavor) => flavor.coffees, {
    cascade: true,
  })
  flavors: Flavor[];
}
