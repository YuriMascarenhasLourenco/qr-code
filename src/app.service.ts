import { Injectable } from '@nestjs/common';
import * as readline from 'readline';
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
