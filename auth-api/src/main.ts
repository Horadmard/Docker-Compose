import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*', // Frontend URL
    methods: 'GET,POST,PUT,DELETE',
    credentials: true, // If you're using cookies/authentication
  });
  await app.listen(3000);
}


bootstrap();
