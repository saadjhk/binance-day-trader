import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cron } from '@nestjs/schedule';
import { Model } from 'mongoose';
import {
    TradingPair,
    TradingPairDocument,
} from 'src/schemas/TradingPair.schema';
import { BinanceService } from './Binance.service';
import * as lodash from 'lodash';

@Injectable()
export class TradingPairArchivalService {
    private readonly logger = new Logger(TradingPairArchivalService.name);

    constructor(
        private binanceService: BinanceService,
        @InjectModel(TradingPair.name)
        private tradingPairModel: Model<TradingPairDocument>,
    ) {}

    @Cron('*/3 * * * *')
    handleCron() {
        this.logger.debug('Fetch New Trading Pairs');

        this.binanceService
            .getExchangeInfo()
            .then((axiosExchangeInfoResponse) => {
                const { data } = axiosExchangeInfoResponse;

                const mappedSymbols = data.symbols
                    .map((symbol) => {
                        return lodash.pick(symbol, [
                            'symbol',
                            'baseAsset',
                            'quoteAsset',
                            'baseAssetPrecision',
                            'quoteAssetPrecision',
                            'quotePrecision',
                        ]);
                    })
                    .filter(
                        (mapped) =>
                            mapped.baseAsset.toLowerCase() === 'usdt' ||
                            mapped.quoteAsset.toLowerCase() === 'usdt',
                    );

                this.tradingPairModel
                    .insertMany(mappedSymbols)
                    .then((saved) => {
                        saved.forEach((savedSymbol) => {
                            this.logger.log(
                                `Archived binance trading pair ${savedSymbol.symbol}.`,
                            );
                        });
                    })
                    .catch((err) => {
                        this.logger.error(
                            `Error archiving trading pairs. ${err.message}`,
                        );
                    });
            });
    }
}
