import { Injectable } from '@nestjs/common';
import { RedisService } from '@liaoliaots/nestjs-redis';

@Injectable()
export class AppService {
  constructor(private readonly redisService: RedisService) {}

  async getHello() {
    const key = 'key1111'; // Ключ для кэширования в Redis
    console.log('Checking Redis connection...');

    // Получаем экземпляр клиента Redis
    const client = this.redisService.getOrThrow();

    // Проверяем наличие значения в кэше Redis
    const value = await client.get(key);
    console.log('value', value);

    if (value) return value; // Если значение найдено, возвращаем его

    const newValue = 'newHello World!'; // Создаем новое значение
    await client.set(key, newValue, 'EX', 50); // Сохраняем в Redis с истечением 10 секунд
    return 'Hello World!'; // Возвращаем новое значение
  }
}
