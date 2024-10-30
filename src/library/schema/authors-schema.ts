import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ collection: 'authors' })
@ObjectType()
export class Authors {
  @Prop()
  @Field()
  _id: string;
  @Prop()
  @Field()
  name: string;
  @Prop()
  @Field()
  sanitizedName: string;
  @Prop()
  @Field()
  bio: string;

  // books: string[]
  // aliases: string[]
}

//ประกาศ document
export type AuthorsDocument = Authors | Document; // | มาคั่น เพื่อบอกว่าเป็นข้อมูลของ class นี้ หรือ เป็น Document ของ Schema นี้

//ประกาศตัวแปรสำหรับใช้งาน schema
const AuthorsSchema = SchemaFactory.createForClass(Authors);

//Export ไปใช้งาน
export { AuthorsSchema };
