import { HttpException, Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/schemas/User.schema';

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name) private userModel: Model<UserDocument>,
    ) {}

    async createUser(user: {
        name: string;
        email: string;
        subscribedTokens: string[];
    }): Promise<User> {
        return new this.userModel(user).save();
    }

    async subscribeToken(email: string, token: string): Promise<string[]> {
        const user = await this.userModel.findOne({ email });

        if (!user)
            throw new HttpException(
                `Unable to find user having email ${email}`,
                404,
            );

        const present = user.subscribedTokens.find((t) => t === token);

        if (present)
            throw new HttpException(
                `Already subscribed to token ${token}`,
                400,
            );

        user.subscribedTokens.push(token);

        await user.save();

        return user.subscribedTokens;
    }

    async unsubscribeToken(email: string, token: string): Promise<string[]> {
        const user = await this.userModel.findOne({ email });

        if (!user)
            throw new HttpException(
                `Unable to find user having email ${email}`,
                404,
            );

        user.subscribedTokens = user.subscribedTokens.filter(
            (t) => t !== token,
        );

        await user.save();

        return user.subscribedTokens;
    }
}
