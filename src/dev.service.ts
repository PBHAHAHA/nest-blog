import { Injectable } from '@nestjs/common';

@Injectable()
export class DevService {
    get() {
        return '服务  dev'
    }
}
  