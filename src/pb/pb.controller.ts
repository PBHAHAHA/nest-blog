import { Controller, Get, Inject } from '@nestjs/common';
import { TestService } from 'src/test/test.service';

@Controller('pb')
export class PbController {
  constructor(
    private readonly test: TestService,
    @Inject('test') private testValue,
  ) {}
  @Get()
  get(): string {
    return this.test.get() + this.testValue;
  }
}
