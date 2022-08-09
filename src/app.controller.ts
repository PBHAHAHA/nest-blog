import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from './config/config.service';
import { DbService } from './db.service';

// 装饰器 类似于继承 用来增强类的功能
@Controller()
export class AppController {
  constructor(private readonly config: ConfigService) {}

  @Get()
  getHello(): any {
    // return '123321'
    return this.config.get("upload.exts")
  }
}
