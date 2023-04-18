import { Module } from '@nestjs/common';
import { GamesService } from './service/games.service';
import { GamesController } from './controller/games.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import  Game  from 'src/typeorm/entities/game.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Game])],
  providers: [GamesService, ],
  controllers: [GamesController]
})
export class GamesModule {}
