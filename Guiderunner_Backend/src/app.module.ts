import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Account } from './typeorm/entities/account.entity';
import { AccountsModule } from './accounts/accounts.module';
import { GamesModule } from './games/games.module';
import { NewsModule } from './news/news.module';
import { RecordsModule } from './records/records.module';
import Games from './typeorm/entities/game.entity';
import News from './typeorm/entities/news.entity';
import Records from './typeorm/entities/records.entity';
import Token from './auth/token.entity';
import { AuthModule } from './auth/auth.module';
import { PassportModule } from '@nestjs/passport';



@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'guide_runner',
    entities: [Account,Games,News,Records,Token],
    synchronize: true,
    migrationsRun: false,
    
  }), AccountsModule, GamesModule, NewsModule, RecordsModule,AuthModule,
  PassportModule, ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
