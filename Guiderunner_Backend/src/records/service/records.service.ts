import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { privateDecrypt } from 'crypto';
import Records from 'src/typeorm/entities/records.entity';
import { CreateRecordParams, UpdateRecordParams } from 'src/utils/types';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class RecordsService {
    constructor(@InjectRepository(Records)
    private recordRepository:Repository<Records>,
    private dataSource: DataSource){}
    async findRecords(){
        return {records : await this.dataSource.getRepository(Records).find()};
    }

    async findRecord(id:number){
        return await this.dataSource.getRepository(Records).findBy({id:id});
        }

    
    createRecord(recordDetails:CreateRecordParams){
        const newRecord = this.recordRepository.create({
            ...recordDetails
        });
        return this.recordRepository.save(newRecord);
    } 
    updateRecord(id: number, updateRecordDetails: UpdateRecordParams){
        return this.recordRepository.update({ id }, {...updateRecordDetails });
    }
    deleteRecord(id:number){
        return this.recordRepository.delete({ id });
    }











    
}
