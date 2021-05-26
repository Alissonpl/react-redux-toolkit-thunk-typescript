import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
  });
  app.setGlobalPrefix(process.env.BASEPATH);
  const options = new DocumentBuilder()
    .setTitle(process.env.npm_package_name)
    .setDescription(process.env.npm_package_description)
    .setVersion(process.env.npm_package_version)
    .build();
  const document = SwaggerModule.createDocument(app, options);
  const optionsSwagger =
    process.env.NODE_ENV === 'development'
      ? {}
      : {
          swaggerOptions: {
            supportedSubmitMethods: [],
          },
        };
  SwaggerModule.setup(
    `${process.env.BASEPATH}/docs`,
    app,
    document,
    optionsSwagger,
  );
  app.setGlobalPrefix(process.env.BASEPATH);
  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  await app.listen(8080);
}
bootstrap();
