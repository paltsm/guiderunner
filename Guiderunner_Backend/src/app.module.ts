import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Account from './accounts.entity';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import Games from './games.entity';
import News from './news.entity';
import Records from './records.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      username: 'root',
      password: '',
      database: 'guiderunner',
      entities: [Account, Games, Records, News],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
