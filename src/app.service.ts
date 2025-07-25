import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getMsg() {
    return {
      msg: 'Hello World!',
      time: new Date(),
    };
  }
}
