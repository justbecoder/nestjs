/**
 * @file: 基本控制器
 * @author: huxiaoshuai
 * @Date: 2022-03-07 16:12:35
 * @LastEditors: huxiaoshuai
 * @LastEditTime: 2022-03-07 16:52:27
 */
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
