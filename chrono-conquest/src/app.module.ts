import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as dotenv from 'dotenv';
import { AccountController } from './controllers/account/account.controller';
import { DatabaseModule } from './database/database.module';
import { AccountModule } from './modules/account/account.module';

dotenv.config();

@Module({
  imports: [
    AccountModule,
    DatabaseModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [AccountController],
  providers: [],
})
export class AppModule {}
