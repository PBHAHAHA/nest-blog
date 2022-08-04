import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// 装饰器 类似于继承 用来增强类的功能
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

