import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BinanceModule } from 'src/Binance/Binance.module';
import { TradingPairModule } from 'src/TradingPair/TradingPair.module';
import { CandleStickArchivalScheduler } from './CandleStickArchival.producer';

@Module({
    imports: [MongooseModule.forFeature([]), TradingPairModule, BinanceModule],
    controllers: [],
    providers: [CandleStickArchivalScheduler],
})
export class CandleStickModule {}
