import { Module } from '@nestjs/common';
import { AppModule } from 'src/app.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import TokenStrategy from './token.strategy';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Account } from 'src/typeorm/entities/account.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Account])],
    controllers: [AuthController],
    providers: [AuthService, TokenStrategy],
})
export class AuthModule {}