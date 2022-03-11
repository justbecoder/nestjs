/**
 * @file: description
 * @author: huxiaoshuai
 * @Date: 2022-03-09 20:56:26
 * @LastEditors: huxiaoshuai
 * @LastEditTime: 2022-03-11 17:43:51
 */
import { Injectable } from '@nestjs/common';
import { Cat } from './interface/cat.interface';

/**
 * @method addLog
 * @description 装饰器，用于记录日志
 * @param Object target 目标类
 * @param string name 目标类的某个方法
 * @param descriptor 指代当前target[name]的相关属性和方法体
 *
 */
function addLog(target, name, descriptor) {
  // console.log({
  //   target,
  //   name,
  //   descriptor,
  // });

  const oldValue = descriptor.value;

  descriptor.value = function () {
    // eslint-disable-next-line
    console.log(`Calling ${name} with`, arguments);

    // eslint-disable-next-line
    return oldValue.apply(this, arguments);
  };

  return descriptor;
}

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  @addLog
  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }
}
