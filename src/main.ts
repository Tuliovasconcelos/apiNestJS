import { NestFactory } from '@nestjs/core';
import { UserModule } from './user/modules/user.module';
import { ValidationPipe } from '@nestjs/common';
import { LogInterceptor } from './interceptors/log.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(UserModule);

  app.useGlobalPipes(new ValidationPipe());

  //Interceptador de requisições "Logger"
  app.useGlobalInterceptors(new LogInterceptor());

  await app.listen(3000);
}
bootstrap();
