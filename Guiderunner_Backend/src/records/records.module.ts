import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Records from 'src/typeorm/entities/records.entity';
import { RecordsController } from './controller/records.controller';
import { RecordsService } from './service/records.service';

@Module({
    imports: [TypeOrmModule.forFeature([Records])],
    controllers: [RecordsController],
    providers: [RecordsService]})
export class RecordsModule {
    
}
