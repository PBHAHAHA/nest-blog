import { Module } from '@nestjs/common';
import { TestModule } from 'src/test/test.module';
import { PbController } from './pb.controller';
import { PbService } from './pb.service';

@Module({
  imports: [TestModule],
  controllers: [PbController],
  providers: [PbService]
})
export class PbModule {}
