import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DevService } from './dev.service';
import dotenv from 'dotenv';
import path from 'path';
import { ConfigService } from './config.service';
import { DbService } from './db.service';

dotenv.config({ path: path.join(__dirname, '../../.env') });
console.log(process.env.NODE_ENV);

// const configService = {
//   provide: 'ConfigService',
//   useClass: process.env.NODE_ENV==='development' ? DevService : AppService,
// };

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, ConfigService, {
    provide: 'DbService',
    inject: ['ConfigService'],
    useFactory(configService){
      console.log(configService)
      return new DbService(configService)
    }
  }],
})
export class AppModule {}
