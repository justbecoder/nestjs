/**
 * @file: Cats Controller
 * @author: huxiaoshuai
 * @Date: 2022-03-07 17:18:25
 * @LastEditors: huxiaoshuai
 * @LastEditTime: 2022-03-11 19:23:16
 */
import {
  Controller,
  Get,
  Req,
  Post,
  HttpCode,
  Query,
  Body,
  Param,
  HttpStatus,
} from '@nestjs/common';
import { Request } from 'express';
import { CreateCatDto } from './dto';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Get()
  // findAll(@Req() request: Request): string {
  findAll(@Query() query): string {
    console.log({
      // request,
      // query: request.query,
      query,
    });
    return 'This action return all cats!';
  }

  @Post()
  // @HttpCode(204)
  create(@Body() body): string {
    console.log({
      body,
    });
    return 'welcome to create a cat!';
  }

  // async/await
  @Get('async')
  async findAsync(): Promise<any[]> {
    return [];
  }

  @Get(':name')
  findOne(@Param() param): string {
    console.log({
      param,
    });
    return `Here find a cat called ${param.name}`;
  }

  @Post('add')
  createOneCat(@Body() createCatDto: CreateCatDto): string {
    // console.log({
    //   createCatDto,
    //   HttpStatus,
    // });
    this.catsService.create({
      name: '',
      age: 1,
      breed: 'no',
    });
    return 'create one cat successfully';
    // return {
    //   a: 10,
    // };
  }
}
