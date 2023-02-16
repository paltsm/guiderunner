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
import newAccountDto from './newAccount.dto';
import newRecordsDto from './newRecords.dto';
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
  @Get('accounts')
  async listAccounts() {
    const accountsRepo = this.dataSource.getRepository(Account);
    const [adat, darab] = await accountsRepo
      .createQueryBuilder()
      .getManyAndCount();
    return { accounts: adat, count: darab };
  }
  @Post('accounts')
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
  @Get('records')
  async listRecords() {
    const recordsRepo = this.dataSource.getRepository(Records);
    const [adat, darab] = await recordsRepo
      .createQueryBuilder()
      .getManyAndCount();
    return { records: adat, count: darab };
  }
  @Post('records')
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
}
