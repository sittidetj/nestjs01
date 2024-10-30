import { Field, InputType } from '@nestjs/graphql';

//กำหนดประเภทของ field เป็น inputtype
@InputType()
export class findApi1Dto {
  @Field() //ประกาศให้เป็น field เพื่อให้ graphQL รู้จักแล้วนำไปใช้งานได้
  code: string;

  @Field({ nullable: true })
  name: string;
}
