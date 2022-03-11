/**
 * @file: description
 * @author: huxiaoshuai
 * @Date: 2022-03-11 19:22:44
 * @LastEditors: huxiaoshuai
 * @LastEditTime: 2022-03-11 19:24:01
 */
import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

@Module({
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModule {}
