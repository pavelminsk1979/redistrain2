import { Inject, Injectable } from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';

@Injectable()
export class AppService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  async getHello() {
    const key1 = 'key111';
    console.log('Checking Redis connection...');
    const value = await this.cacheManager.get(key1);
    console.log('value', value);

    if (value) return value;
    const newValue = 'newHello World!';
    await this.cacheManager.set(key1, newValue);
    return 'Hello World!';
  }
}
