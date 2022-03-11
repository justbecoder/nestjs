/**
 * @file: 应用程序入口文件，由核心函数NestFactory创建Nest应用程序的示例
 * @author: huxiaoshuai
 * @Date: 2022-03-07 16:12:35
 * @LastEditors: huxiaoshuai
 * @LastEditTime: 2022-03-07 16:53:29
 */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
