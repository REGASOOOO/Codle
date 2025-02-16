import { Controller, Get, Post, Req } from '@nestjs/common';
import { FastifyRequest } from 'fastify';

@Controller('cats')
export class CatsController {
  @Post()
  create(): string {
    return 'This action adds a new cat';
  }
  @Get()
  getUserInfo(@Req() request: FastifyRequest) {
    return {
      user: request.headers,
      ip: request.ip,
    };
  }
}
