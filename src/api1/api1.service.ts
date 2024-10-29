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
    const coll1 = await this.Coll1Doc.create({
      code: code,
      name: name,
    });

    // const coll1 = await this.Coll1Doc.create({
    //   code: CreateApi1Dto.code,
    //   name: CreateApi1Dto.name,
    // });

    return coll1.save();
  }

  async postData(CreateApi1Dto) {
    const { code, name } = CreateApi1Dto;
    const coll1 = await this.Coll1Doc.create({
      code: code,
      name: name,
    });
    return coll1.save();
  }

  async postUpdate(UpdateApi1Dto) {
    const { code, name } = UpdateApi1Dto;
    const coll1 = await this.Coll1Doc.findOneAndUpdate(
      { code: code },
      { name: name },
      { new: true },
    );
    return coll1;
  }

  //ลบข้อมูล รูปแบบที่1
  async deleteData1(id: string) {
    return await this.Coll1Doc.findByIdAndDelete(id).exec();
  }

  //ลบข้อมูล รูปแบบที่1
  async deleteData2(code: string) {
    return await this.Coll1Doc.deleteOne({
      code: code,
    }).exec();
  }
}
