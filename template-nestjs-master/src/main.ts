import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix(process.env.BASEPATH);
  const options = new DocumentBuilder()
    .setTitle(process.env.npm_package_name)
    .setDescription(process.env.npm_package_description)
    .setVersion(process.env.npm_package_version)
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup(`${process.env.BASEPATH}/docs`, app, document);
  await app.listen(3000);
}
bootstrap();
