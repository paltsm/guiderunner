import { Injectable } from '@nestjs/common';
import { Account } from 'src/typeorm/entities/account.entity';
import * as crypto from 'crypto';
import Token from './token.entity';
import { DataSource } from 'typeorm';
@Injectable()
export class AuthService {
constructor(private datasource: DataSource){}

    async findUserByToken(token: string){
        const tokenRepo = this.datasource.getRepository(Token);
        const tokenObj = await tokenRepo.findOne({
            where: { token },
            relations: { account: true },
        });
        if (tokenObj == null){
            return null;
        }
        return tokenObj.account;
    }

    async generateTokenFor(account: Account){ 
        const veletlen = crypto.randomBytes(32);
        const tokenString = veletlen.toString('hex');

        const token = new Token();
        token.account = account;
        token.token = tokenString;
        await this.datasource.getRepository(Token).insert(token);
        
        
        return tokenString;
    }
    async logout(token) {
    const tokenRepo = this.datasource.getRepository(Token);
        const tokenObj = await tokenRepo.findOne({where: {token},
        relations : {account: true}
        });
        await tokenRepo.delete(tokenObj)
        
    }
        
}   
