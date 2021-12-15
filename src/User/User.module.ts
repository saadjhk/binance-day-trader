import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/User/User.schema';
import { UserController } from './User.controller';
import { UserService } from './User.service';

@Module({
  imports: [MongooseModule.forFeature([{
    name: User.name,
    schema: UserSchema
  }])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
