import { Comment } from 'src/entities/comment.entity';
import { Topic } from 'src/entities/topic.entity';
import { Users } from 'src/entities/user.entity';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const config: PostgresConnectionOptions = {
  type: 'postgres',
  database: 'testDB',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  entities: [Users, Topic, Comment],
  synchronize: true,
};

export default config;
