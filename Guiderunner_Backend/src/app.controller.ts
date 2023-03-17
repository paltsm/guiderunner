import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Render,
} from '@nestjs/common';
import { DataSource } from 'typeorm';
import Account from './accounts.entity';
import { AppService } from './app.service';
import Games from './games.entity';
import newAccountDto from './newAccount.dto';
import newGamesDto from './newGames.dto';
import newNewsDto from './newNews.dto';
import newRecordsDto from './newRecords.dto';
import News from './news.entity';
import Records from './records.entity';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private dataSource: DataSource,
  ) {}

  @Get()
  @Render('index')
  index() {
    return { message: 'Welcome to the homepage' };
  }

// acounts

  @Get('accounts')
  async listAccounts() {
    const accountsRepo = this.dataSource.getRepository(Account);
    const [adat, darab] = await accountsRepo
      .createQueryBuilder()
      .getManyAndCount();
    return { accounts: adat, count: darab };
  }
  @Post('newaccount')
  async newAccount(@Body() account: newAccountDto) {
    const accountsRepo = this.dataSource.getRepository(Account);
    accountsRepo.save(account);
    return account;
  }
  @Delete('accounts/:id')
  deleteAccount(@Param('id') id: number) {
    const accountsRepo = this.dataSource.getRepository(Account);
    accountsRepo.delete(id);
  }

// records

  @Get('records')
  async listRecords() {
    const recordsRepo = this.dataSource.getRepository(Records);
    const [adat, darab] = await recordsRepo
      .createQueryBuilder()
      .getManyAndCount();
    return { records: adat, count: darab };
  }
  @Post('newrecord')
  async newRecord(@Body() record: newRecordsDto) {
    const recordsRepo = this.dataSource.getRepository(Records);
    recordsRepo.save(record);
    return record;
  }
  @Delete('records/:id')
  deleteRecords(@Param('id') id: number) {
    const recordsRepo = this.dataSource.getRepository(Records);
    recordsRepo.delete(id);
  }

// news

  @Get('news')
  async listNews() {
    const newsRepo = this.dataSource.getRepository(News);
    const [adat, darab] = await newsRepo
      .createQueryBuilder()
      .getManyAndCount();
    return { news: adat, count: darab };
  }
  @Post('newnews')
  async newNews(@Body() news: newNewsDto) {
    const newsRepo = this.dataSource.getRepository(News);
    newsRepo.save(news);
    return news;
  }
  @Delete('news/:id')
  deleteNews(@Param('id') id: number) {
    const newsRepo = this.dataSource.getRepository(News);
    newsRepo.delete(id);
  }

// games

  @Post('newgames')
  async newGames(@Body() games: newGamesDto) {
    const gamesRepo = this.dataSource.getRepository(Games);
    gamesRepo.save(games);
    return games;
  }
}
