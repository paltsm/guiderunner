import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Account } from 'src/typeorm/entities/account.entity';
import { CreateAccountParams, UpdateAccountParams } from 'src/utils/types';
import { DataSource, Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AccountsService {
    constructor(
        @InjectRepository(Account)
        private accountRepository: Repository<Account>,
        private dataSource: DataSource){

    }

    async findAccounts(){
        return{accounts: await this.dataSource.getRepository(Account).find()};
        }

    async findAccount(id:number){
        return await this.dataSource.getRepository(Account).findBy({id:id});
        }

        
 
    async createAccount( accountDetails: CreateAccountParams){
        const salt = await bcrypt.genSalt();
        const hashPassword = await bcrypt.hash(accountDetails.password, salt);
        console.log({ 
            ...accountDetails,
            password: hashPassword
        })
		const takenemail=await this.accountRepository.findOneBy({email:accountDetails.email})
		const takenusername=await this.accountRepository.findOneBy({username:accountDetails.username})
		if(!(takenusername===null)){
			throw new ConflictException("username alredy taken")
		}
		if(!(takenemail===null)){
			throw new ConflictException("email alredy taken")
		}
        const newAccount = this.accountRepository.create({ 
            ...accountDetails,
            password: hashPassword
        });
        
        return this.accountRepository.save(newAccount);
    }
    updateAccount(id: number, updateAccountDetails: UpdateAccountParams){
        return this.accountRepository.update({ id }, {...updateAccountDetails });
    }
    deleteAccount(accounts: Account){
        return this.accountRepository.delete( accounts.id  );
    }
}
