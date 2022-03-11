/**
 * @file: 应用程序根模块
 * @author: huxiaoshuai
 * @Date: 2022-03-07 16:12:35
 * @LastEditors: huxiaoshuai
 * @LastEditTime: 2022-03-11 19:23:24
 */

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminController } from './admin/admin.controller';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [CatsModule],
  controllers: [AppController, AdminController],
  providers: [
    AppService,
    // CatsService
  ],
})
export class AppModule {}
