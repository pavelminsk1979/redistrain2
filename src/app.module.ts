import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CacheModule } from '@nestjs/cache-manager';
import * as redisStore from 'cache-manager-redis-store';

@Module({
  imports: [
    CacheModule.register({
      store: redisStore,
      host: '127.0.0.1',
      port: 6379,
      username: 'newpavel1',
      password: '7StP@55wrd', // Укажите ваш пароль
      ttl: 600, // Время жизни кэша в секундах
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

/*import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as redisStore from 'cache-manager-redis-store';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [
    CacheModule.register({
      store: redisStore,
      host: '127.0.0.1', // Убедитесь, что это правильный хост
      port: 6379, // Убедитесь, что это правильный порт
      ttl: 600, // Время жизни кэша в секундах
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor() {
    console.log('CacheModule has been registered with Redis.');
  }
}*/

/*import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as redisStore from 'cache-manager-redis-store';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [
    CacheModule.register({
      store: redisStore,
      host: 'localhost', // Убедитесь, что это правильный хост
      port: 6379, // Убедитесь, что это правильный порт
      ttl: 600, // Время жизни кэша в секундах
      onClientReady: (client: any) => {
        console.log('Initializing Redis client...');
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
        client.on('connect', () => {
          console.log('Connected to Redis');
        });
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
        client.on('error', (err) => {
          console.error('Redis error:', err);
        });
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}*/
