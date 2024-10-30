import { Args, Query, Resolver } from '@nestjs/graphql';
import { Coll1 } from './schema/api1-schema';
import { Api1Service } from './api1.service';
import { findApi1Dto } from './dto/find-api1-dto';

@Resolver(() => Coll1)
export class Api1Resolver {
  //กำหนด service ที่จะใช้สำหรับเรียกใช้งาน
  constructor(private readonly api1Service: Api1Service) {}

  //กำหนดชื่อ Query ที่ต้องการดึงข้อมูล
  //กำหนด result ที่จะส่งกลับไปแสดงผลให้เป็น object เดียว {} หรือ ชุดข้อมูลเป็น array[]
  @Query(() => [Coll1], { name: 'coll1' })
  findAll() {
    return this.api1Service.findAll(); //กำหนดให้ไปยัง service ที่ต้องการ
  }

  @Query(() => Coll1, { name: 'coll1_findone' })
  findCode(@Args('filter') filter: findApi1Dto) {
    console.log(filter);
  }
}
