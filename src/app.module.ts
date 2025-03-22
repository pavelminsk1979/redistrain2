import { Module } from '@nestjs/common';
import { RedisModule, RedisModuleOptions } from '@liaoliaots/nestjs-redis';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    RedisModule.forRootAsync({
      useFactory: (): RedisModuleOptions => {
        return {
          config: {
            host: 'localhost',
            port: 6379,
            password: '7StP@55wrd',
          },
        };
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
