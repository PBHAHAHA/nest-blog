import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DevService } from './dev.service';
import dotenv from 'dotenv';
import path from 'path';
import { ConfigService } from './config.service';
import { DbService } from './db.service';
import { PbModule } from './pb/pb.module';
import { TestModule } from './test/test.module';

dotenv.config({ path: path.join(__dirname, '../../.env') });
console.log(process.env.NODE_ENV);

// const configService = {
//   provide: 'ConfigService',
//   useClass: process.env.NODE_ENV==='development' ? DevService : AppService,
// };

@Module({
  imports: [PbModule, TestModule],
  controllers: [AppController],
  providers: [
    AppService,
    ConfigService,
    {
      provide: 'DbService',
      inject: ['ConfigService'],
      useFactory(configService) {
        console.log(configService);
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve('蒲兵的异步');
          }, 3000);
        });
        // return new DbService(configService)
      },
    },
  ],
})
export class AppModule {}
