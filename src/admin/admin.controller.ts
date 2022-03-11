/**
 * @file: Host
 * @author: huxiaoshuai
 * @Date: 2022-03-07 17:49:20
 * @LastEditors: huxiaoshuai
 * @LastEditTime: 2022-03-07 17:56:37
 */
import { Controller, Get, HostParam } from '@nestjs/common';

@Controller({
  // 指定域名访问
  host: 'admin.localhost',
  // 动态域名 :host
  // host: ':host.localhost',
  // 指定路径
  path: 'admin',
})
export class AdminController {
  @Get()
  // 接收动态域名
  // index(@HostParam('host') host: string): string {
  index(): string {
    return 'welcome to Admin page';
    // return host;
  }
}
