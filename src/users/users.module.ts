import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentService } from 'src/comment/comment.service';
import { Users } from 'src/entities/user.entity';
import { UserController } from './users.controller';
import { UserService } from './user.service';

@Module({
  imports: [TypeOrmModule.forFeature([Users])],
  controllers: [UserController],
  providers: [UserService, CommentService],
})
export class UserModule {}
