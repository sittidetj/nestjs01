import { Module } from '@nestjs/common';
import { Api1Service } from './api1.service';
import { Api1Controller } from './api1.controller';

@Module({
  controllers: [Api1Controller],
  providers: [Api1Service],
})
export class Api1Module {}
