import { Injectable, Logger } from '@nestjs/common';
import { CreateApi1Dto } from './dto/create-api1.dto';
import { UpdateApi1Dto } from './dto/update-api1.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Coll1, Coll1Document } from './schema/api1-schema';
import { Model } from 'mongoose';

@Injectable()
export class Api1Service {
  logger: Logger = new Logger('Api1Service');
  constructor(
    @InjectModel(Coll1.name) private Coll1Doc: Model<Coll1Document>,
  ) {}
  async findAll() {
    return await this.Coll1Doc.find().exec();
  }

  async putData(CreateApi1Dto) {
    // this.logger.log(CreateApi1Dto)
    const { code, name } = CreateApi1Dto;
    // console.log(code, name);
    // const coll1 = await this.Coll1Doc.create({
    //   code: code,
    //   name: name,
    // });

    const coll1 = await this.Coll1Doc.create({
      code: CreateApi1Dto.code,
      name: CreateApi1Dto.name,
    });

    return coll1.save();
  }
}
