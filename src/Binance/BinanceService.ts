import { HttpException, Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/schemas/User.schema';

@Injectable()
export class BinanceService {
    constructor() {}
}
