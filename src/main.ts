import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LoggerMiddleware } from './common/middleWare/http-log.middleWare';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new LoggerMiddleware();
  app.use(logger.use);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
