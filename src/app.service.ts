/**
 * @file: 具有某些方法的服务
 * @author: huxiaoshuai
 * @Date: 2022-03-07 16:12:35
 * @LastEditors: huxiaoshuai
 * @LastEditTime: 2022-03-07 16:51:43
 */
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! NestJS!';
  }
}
