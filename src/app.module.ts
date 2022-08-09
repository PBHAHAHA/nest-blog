import { Module } from '@nestjs/common';
import dotenv from 'dotenv';
import path from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { ConfigService } from './config.service';
import { ConfigModule } from './config/config.module';
// import { PbModule } from './pb/pb.module';

dotenv.config({ path: path.join(__dirname, '../../.env') });
console.log(process.env.NODE_ENV);

// const configService = {
//   provide: 'ConfigService',
//   useClass: process.env.NODE_ENV==='development' ? DevService : AppService,
// };

@Module({
  imports: [ConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
