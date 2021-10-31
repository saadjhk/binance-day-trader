import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TradingPairDocument = TradingPair & Document;

@Schema()
export class TradingPair {
    @Prop({
        required: true,
        unique: true,
        validate: function (symbol: string) {
            if (symbol.includes('USDT')) {
                return true;
            }
            return false;
        },
    })
    symbol: string;

    @Prop({
        required: true,
    })
    baseAsset: string;

    @Prop({
        required: true,
    })
    quoteAsset: string;

    @Prop({
        required: true,
    })
    baseAssetPrecision: number;

    @Prop({
        required: true,
    })
    quoteAssetPrecision: number;

    @Prop({
        required: true
    })
    quotePrecision: number;
}

export const UserSchema = SchemaFactory.createForClass(TradingPair);