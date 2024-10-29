import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello SITTIDET!!!! change to port 3000 ==> 4000';
  }
}
