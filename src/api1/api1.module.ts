import { Module } from '@nestjs/common';
import { Api1Service } from './api1.service';
import { Api1Controller } from './api1.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Coll1, Coll1Schema } from './schema/api1-schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Coll1.name,
        schema: Coll1Schema,
      },
    ]),
  ],
  controllers: [Api1Controller],
  providers: [Api1Service],
})
export class Api1Module {}
