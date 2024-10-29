import { Controller, Get, Logger } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('test1')
export class AppController {
  logger: Logger = new Logger(AppController.name);
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  //เพิ่ม a1 ต่อจากของเดิม
  @Get('a1')
  helloXXX1(): AppDto {
    console.log('log from a1');
    return {
      code: 'X',
      name: 'Y',
    };
  }

  //เพิ่ม a2
  @Get('a2')
  helloXXX2(): AppDto {
    this.logger.log('log from a2');
    return {
      code: 'X',
      name: 'Y',
    };
  }
}

//schema
interface AppDto {
  code: string;
  name: string;
  isActive?: boolean;
}
