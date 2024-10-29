import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ collection: 'coll1' })
export class Coll1 {
  @Prop()
  code: string;
  @Prop()
  name: string;
  @Prop()
  isActive?: boolean;
}

//ประกาศ document
export type Coll1Document = Coll1 | Document; // | มาคั่น เพื่อบอกว่าเป็นข้อมูลของ class นี้ หรือ เป็น Document ของ Schema นี้

//ประกาศตัวแปรสำหรับใช้งาน schema
const Coll1Schema = SchemaFactory.createForClass(Coll1);

//Export ไปใช้งาน
export { Coll1Schema };
