import 'dotenv/config'
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // กำหนดการตั้งค่า Swagger
  const config = new DocumentBuilder()
    .setTitle('API for NestJS Class') //กำหนดชื่อของ API ที่สร้างได้
    .setDescription('API description') //อธิบายรายละเอียดเพิ่มเติมให้กับ API
    .setVersion('1.0') //กำหนด version ที่สร้างขี้นมา
    .addTag('example')
    .build();
  const document = SwaggerModule.createDocument(app, config);

  // กำหนด Swagger UI
  SwaggerModule.setup('swaggerapi', app, document);
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
