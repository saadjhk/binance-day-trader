import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance, AxiosResponse } from 'axios';

export type Symbols = {
    symbol: string;
    status: string;
    baseAsset: string;
    baseAssetPrecision: number;
    quoteAsset: string;
    quotePrecision: number;
    quoteAssetPrecision: number;
    orderTypes: any[];
    icebergAllowed: boolean;
    ocoAllowed: boolean;
    isSpotTradingAllowed: boolean;
    isMarginTradingAllowed: boolean;
    filters: any[];
    permissions: any[];
};

export type BinanceExchangeInfo = {
    timezone: string;
    serverTime: number;
    rateLimits: any[];
    exchangeFilters: any[];
    symbols: Symbols[];
};

@Injectable()
export class BinanceService {
    binanceClient: AxiosInstance;

    constructor() {
        this.binanceClient = axios.create({
            baseURL: process.env.BINANCE_BASE_ENDPOINT,
        });
    }

    getExchangeInfo(): Promise<AxiosResponse<BinanceExchangeInfo>> {
        return this.binanceClient.get(`/api/v3/exchangeInfo`);
    }
}
