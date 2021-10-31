import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { BinanceModule } from './Binance/Binance.module';
import { UserModule } from './User/User.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URL!),
    BinanceModule,
    UserModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
