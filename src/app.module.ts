import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { BinanceModule } from './Binance/Binance.module';
import { UserModule } from './User/User.module';
import { BullModule } from '@nestjs/bull';
import { CandleStickModule } from './CandleStick/CandleStick.module';
import { AnalyticsModule } from './Analytics/AnalyticsModule';
import { TradingPairModule } from './TradingPair/TradingPair.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URL!),
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379,
      },
    }),
    BinanceModule,
    TradingPairModule,
    CandleStickModule,
    AnalyticsModule,
    UserModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
