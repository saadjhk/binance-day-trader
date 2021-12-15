import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { BinanceService } from './Binance.service';
import { CandleStickArchivalScheduler } from '../CandleStick/CandleStickArchival.producer';
import { TradingPairArchivalService } from '../TradingPair/TradingPairArchival.service';
@Module({
    imports: [
        ScheduleModule.forRoot(),
    ],
    controllers: [],
    providers: [
        BinanceService,
        TradingPairArchivalService,
        CandleStickArchivalScheduler,
    ],
})
export class BinanceModule {}
