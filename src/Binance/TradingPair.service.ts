import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { BinanceService } from './Binance.service';

@Injectable()
export class TradingPairService {
    private readonly logger = new Logger(TradingPairService.name);

    constructor(private binanceService: BinanceService) {}

    @Cron('0 00 12 * * *')
    handleCron() {
        this.logger.debug('Fetch New Trading Pairs');
    }
}
