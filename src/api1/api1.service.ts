import { Injectable } from '@nestjs/common';
import { CreateApi1Dto } from './dto/create-api1.dto';
import { UpdateApi1Dto } from './dto/update-api1.dto';

@Injectable()
export class Api1Service {
  create(createApi1Dto: CreateApi1Dto) {
    return 'This action adds a new api1';
  }

  findAll() {
    return `This action returns all api1`;
  }

  findOne(id: number) {
    return `This action returns a #${id} api1`;
  }

  update(id: number, updateApi1Dto: UpdateApi1Dto) {
    return `This action updates a #${id} api1`;
  }

  remove(id: number) {
    return `This action removes a #${id} api1`;
  }
}
