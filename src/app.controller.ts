import { Controller, Get, Inject, Param } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { json } from 'stream/consumers';
import { AppService } from './app.service';
import { ConfigService } from './config/config.service';
import { CustomPipe } from './custom.pipe';
import { DbService } from './db.service';

// 装饰器 类似于继承 用来增强类的功能
@Controller()
export class AppController {
  prisma: PrismaClient
  constructor(
    private readonly config: ConfigService
  ) {
    this.prisma = new PrismaClient()
  }

  @Get(':id')
  hello(@Param('id', CustomPipe) id: number) {
    // return '123321'
    console.log(typeof id)
    return this.prisma.article.findUnique({
      where: {
        id: Number(id)
      }
    })
    
  }
}
