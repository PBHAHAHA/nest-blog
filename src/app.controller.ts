import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { DbService } from './db.service';

// 装饰器 类似于继承 用来增强类的功能
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('DbService')
    private readonly dbService: string
  ) {}

  @Get()
  getHello(): string {
    return this.dbService
  }
}

