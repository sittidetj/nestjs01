import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  Logger,
  Query,
} from '@nestjs/common';
import { Api1Service } from './api1.service';
import { CreateApi1Dto } from './dto/create-api1.dto';
import { UpdateApi1Dto } from './dto/update-api1.dto';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('API1')
@Controller('api1')
export class Api1Controller {
  logger: Logger = new Logger(Api1Controller.name);
  constructor(private readonly api1Service: Api1Service) {}

  @Get('listapiusers')
  @ApiOperation({ summary: 'API สำหรับดึงรายการข้อมูลทั้งหมด' })
  findAll() {
    // this.logger.log('log from listapiusers');
    return this.api1Service.findAll();
  }

  //Put method
  @Put('putapi')
  //อธิบาย status code ต่างๆได้
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 400, description: 'Missing info: parameter' })
  @ApiResponse({ status: 200, description: 'OK' })
  @ApiBody({ type: CreateApi1Dto })
  putData(@Body() CreateApi1Dto: CreateApi1Dto) {
    console.log(CreateApi1Dto);
    // this.logger.log('log from putapi : ' + JSON.stringify(CreateApi1Dto));
    return this.api1Service.putData(CreateApi1Dto);
  }

  //Post method
  @Post('postapi')
  postData(@Body() CreateApi1Dto: CreateApi1Dto) {
    // this.logger.log('log from postapi');
    return this.api1Service.postData(CreateApi1Dto);
  }

  //Update with Post method
  @Post('updateapi')
  postUpdate(@Body() UpdateApi1Dto: UpdateApi1Dto) {
    // this.logger.log('log from updateapi');
    return this.api1Service.postUpdate(UpdateApi1Dto);
  }

  //Delete method ด้วย param
  @Delete('deleteapi1/:code')
  deleteData1(@Param('code') code: string) {
    // this.logger.log('log from deleteapi1 : ' + code);
    return this.api1Service.deleteData1(code);
  }

  //Delete method ด้วย query message
  @Delete('deleteapi2/?')
  deleteData2(@Query('code') code: string) {
    // this.logger.log('log from deleteapi2 : ' + code);
    return this.api1Service.deleteData2(code);
  }
}
