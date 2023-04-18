import { Body, Controller, Get, Post, UnauthorizedException,Headers } from "@nestjs/common";    
import { Account } from "src/typeorm/entities/account.entity";
import { DataSource } from "typeorm"; 
import * as bcrypt from "bcrypt";
import { AuthService } from "./auth.service";
import LoginDto from "./login.dto";
import { UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Delete } from "@nestjs/common";

@Controller('auth')
export class AuthController{
    constructor(private dataSource: DataSource, private authService: AuthService){}
    @Post('login')
    async login(@Body() loginData: LoginDto){
     const accountRepo = this.dataSource.getRepository(Account);
     const account = await accountRepo.findOneBy({ email: loginData.email })
     console.log(account);
     if (account == null){
        throw new UnauthorizedException("Hibás email vagy jelszó");
     }
     if (!await bcrypt.compare(loginData.password,account.password)){
        throw new UnauthorizedException("Hibás email vagy jelszó");
     }
     return {
        token: await this.authService.generateTokenFor(account),
     };
    }
    @UseGuards(AuthGuard('bearer'))
    @Delete('logout')
    async deleteToken(@Headers('authorization') authHeader: string){
      const token = authHeader.split(' ')[1];
      this.authService.logout(token);
   }
    
}