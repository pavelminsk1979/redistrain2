import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { CacheInterceptor, CacheKey, CacheTTL } from '@nestjs/cache-manager';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseInterceptors(CacheInterceptor)
  @CacheKey('key11') // Управление ключом
  @CacheTTL(10000) // Управление длительностью
  async getHello() {
    return this.appService.getHello();
  }
}
