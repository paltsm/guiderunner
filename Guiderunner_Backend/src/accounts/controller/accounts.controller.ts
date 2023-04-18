import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put, UseGuards,Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateAccountDto } from 'src/accounts/dtos/createaccount.dto';
import { UpdateAccountDto } from 'src/accounts/dtos/updateaccount.dto';
import { AccountsService } from 'src/accounts/service/accounts.service';

@Controller('accounts')
export class AccountsController {
    constructor(private accountService: AccountsService ){
    }
    @Get()
    async getAccounts(){
        const accounts = await this.accountService.findAccounts();
        return accounts;
    }
    @Get(':id')
    findAccount(@Param('id') id: number){
        return this.accountService.findAccount(+id);
    }

   

    @Post()
    createAccount(@Body() createAccountDto: CreateAccountDto ){
        return this.accountService.createAccount(createAccountDto);
    }
    //if you want to modify the entire database
    @Put(':id')
    async updatePutAccountById(
    @Param('id', ParseIntPipe) id:number,
    @Body() updateAccountDto:UpdateAccountDto,
    ){
        await this.accountService.updateAccount(id,updateAccountDto);
    }
    //if you want to partially update the database
    @Patch(':id')
    async updatePatchAccountById(
    @Param('id', ParseIntPipe) id:number,
    @Body() updateAccountDto:UpdateAccountDto,
    ){
        await this.accountService.updateAccount(id,updateAccountDto);
    }
    @Delete(':id')
    async deleteAccountById(
    @Param('id', ParseIntPipe) id:number){
        await this.accountService.deleteAccount(id);
    }
}
