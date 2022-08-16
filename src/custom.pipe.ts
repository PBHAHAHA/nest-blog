import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class CustomPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log(value)
    console.log(metadata)
    if(metadata.metatype == Number) {
      console.log("哈哈哈",+value)
      return parseInt(value) 
    }
    // throw new BadRequestException('参数错误')
    return value;
  }
}
