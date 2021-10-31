import { Body, Controller, Post, Put } from '@nestjs/common';
import { User } from 'src/schemas/User.schema';
import { UserService } from './User.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  async createUser(
    @Body()
    createUserDto: {
      name: string;
      email: string;
      subscribedTokens: string[];
    },
  ): Promise<User> {
    return await this.userService.createUser(createUserDto);
  }

  @Put('/token/subscribe')
  async subscribeToken(
    @Body() subscriptionDto: {
      email: string;
      token: string;
    }
  ): Promise<string[]> {
    return await this.userService.subscribeToken(subscriptionDto.email, subscriptionDto.token)
  }
}
