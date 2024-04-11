import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Topic } from './topic.entity';
import { Users } from './user.entity';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

  @ManyToOne((type) => Users, (user) => user.comments)
  user: Users;

  @ManyToOne((type) => Topic, (topic) => topic.comments)
  topic: Topic;
}
