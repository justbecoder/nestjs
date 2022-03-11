/**
 * @file: 针对app.controller的单元测试
 * @author: huxiaoshuai
 * @Date: 2022-03-07 16:12:35
 * @LastEditors: huxiaoshuai
 * @LastEditTime: 2022-03-07 16:35:52
 */

import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
