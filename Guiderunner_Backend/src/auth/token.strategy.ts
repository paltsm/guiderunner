import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-http-bearer";
import { AuthService } from "./auth.service";


@Injectable()
export default class TokenStrategy extends PassportStrategy(Strategy){
    constructor(private authService: AuthService){super();}
    

    async validate(token: string) {
        const account = this.authService.findUserByToken(token);
        if(account == null){
            throw new UnauthorizedException();
        }
        return account;
    }
}