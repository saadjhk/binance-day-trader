import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ScheduleModule } from '@nestjs/schedule';
import { TradingPair, TradingPairSchema } from 'src/schemas/TradingPair.schema';
import { BinanceService } from './Binance.service';
import { TradingPairArchivalService } from './TradingPairArchival.service';

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: TradingPair.name,
                schema: TradingPairSchema,
            },
        ]),
        ScheduleModule.forRoot(),
    ],
    controllers: [],
    providers: [BinanceService, TradingPairArchivalService],
})
export class BinanceModule {}
