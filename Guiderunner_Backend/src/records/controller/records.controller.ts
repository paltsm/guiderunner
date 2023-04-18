import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put } from '@nestjs/common';
import { RecordsService } from '../service/records.service';
import { CreateRecordDto } from '../dtos/createrecord.dto';
import { UpdateRecordDto } from '../dtos/updaterecord.dto';

@Controller('records')
export class RecordsController {
    constructor(private recordService: RecordsService){  
    }
    @Get()
    async getRecords(){
        const records = await this.recordService.findRecords();
        return records;
    }
    @Get(':id')
    findRecord(@Param('id') id: number){
        return this.recordService.findRecord(+id);
    }
    @Post()
    createRecord(@Body() createRecordDto: CreateRecordDto ){
        return this.recordService.createRecord(createRecordDto);
    }
    //if you want to modify the entire database
    @Put(':id')
    async updatePutRecordById(
    @Param('id', ParseIntPipe) id:number,
    @Body() updateRecordDto:UpdateRecordDto,
    ){
        await this.recordService.updateRecord(id,updateRecordDto);
    }
    //if you want to partially update the database
    @Patch(':id')
    async updatePatchRecordById(
    @Param('id', ParseIntPipe) id:number,
    @Body() updateRecordDto:UpdateRecordDto,
    ){
        await this.recordService.updateRecord(id,updateRecordDto);
    }
    @Delete(':id')
    async deleteRecordById(
    @Param('id', ParseIntPipe) id:number){
        await this.recordService.deleteRecord(id);
    }
}
