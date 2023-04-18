import { Controller, Get, UseGuards,Request } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';
import { Account } from './typeorm/entities/account.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  //login
  @UseGuards(AuthGuard('bearer'))
  @Get('profile')
  OwnProfile(@Request() req){
    const account: Account = req.account;
    return{
      username:account.username,
      email:account.email,
      
    }
  }
}
