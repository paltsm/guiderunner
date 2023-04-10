import { Module } from '@nestjs/common';
import { AppModule } from 'src/app.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import TokenStrategy from './token.strategy';

@Module({
    controllers: [AuthController],
    providers: [AuthService, TokenStrategy],
})
export class AuthModule {}