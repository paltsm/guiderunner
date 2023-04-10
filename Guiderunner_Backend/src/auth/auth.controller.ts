import { Body, Controller, Get, Post, UnauthorizedException } from "@nestjs/common";    
import { AppService } from "src/app.service";
import Account from "src/accounts.entity";
import { DataSource } from "typeorm"; 
import * as bcrypt from "bcrypt";
import { AuthService } from "./auth.service";
import LoginDto from "./login.dto";

@Controller('auth')
export class AuthController{
    constructor(private dataSource: DataSource, private authService: AuthService){}
    @Post('login')
    async login(@Body() loginData: LoginDto){
     const accountRepo = this.dataSource.getRepository(Account);
     const account = await accountRepo.findOneBy({ email: loginData.email })
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
    
}