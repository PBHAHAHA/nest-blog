import { Module } from '@nestjs/common';
import { TestService } from './test.service';
import { TestController } from './test.controller';

@Module({
  providers: [TestService,{
    provide: 'test',
    useValue: "册数的  test 服务"
  }],
  controllers: [TestController],
  exports: [TestService,'test']
})
export class TestModule {}
