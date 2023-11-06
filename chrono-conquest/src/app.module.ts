import { AccountModule } from './modules/account/account.module';
import { AccountController } from './controllers/account/account.controller';
import { Module } from '@nestjs/common';

@Module({
  imports: [AccountModule],
  controllers: [AccountController],
  providers: [],
})
export class AppModule {}
