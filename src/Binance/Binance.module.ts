import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { BinanceService } from './Binance.service';
import { TradingPairService } from './TradingPair.service';

@Module({
  imports: [ScheduleModule.forRoot()],
  controllers: [],
  providers: [BinanceService, TradingPairService],
})
export class BinanceModule {}
