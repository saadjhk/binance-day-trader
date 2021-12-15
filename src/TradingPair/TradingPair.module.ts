import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TradingPairSchema, TradingPair } from './TradingPair.schema';
import { TradingPairArchivalService } from './TradingPairArchival.service';

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: TradingPair.name,
                schema: TradingPairSchema,
            },
        ]),
    ],
    controllers: [],
    providers: [TradingPairArchivalService],
})
export class TradingPairModule {}
