import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cron } from '@nestjs/schedule';
import { Model } from 'mongoose';
import {
    TradingPair,
    TradingPairDocument,
} from 'src/TradingPair/TradingPair.schema';
import { UserDocument } from 'src/User/User.schema';

@Injectable()
export class CandleStickArchivalScheduler {
    private readonly logger = new Logger(CandleStickArchivalScheduler.name);

    constructor(
        @InjectModel(TradingPair.name)
        private tradingPairModel: Model<TradingPairDocument>,
        private userModel: Model<UserDocument>
    ) {}

    @Cron('0 */4 * * *')
    handleCron() {
        this.logger.debug('Adding CandleStick Archival Jobs');
        // Spawn processes that dump data
        // from Binance for Each Pair Subscribed
    }
}
