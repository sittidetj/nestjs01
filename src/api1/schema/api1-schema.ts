import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ collection: 'coll1' })
@ObjectType()
export class Coll1 {
  @Prop()
  @Field()
  code: string;
  @Prop()
  @Field()
  name: string;
  @Prop()
  @Field({ nullable: true })
  isActive?: boolean;
}

//ประกาศ document
export type Coll1Document = Coll1 | Document; // | มาคั่น เพื่อบอกว่าเป็นข้อมูลของ class นี้ หรือ เป็น Document ของ Schema นี้

//ประกาศตัวแปรสำหรับใช้งาน schema
const Coll1Schema = SchemaFactory.createForClass(Coll1);

//Export ไปใช้งาน
export { Coll1Schema };
