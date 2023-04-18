import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put } from '@nestjs/common';
import { NewsService } from '../service/news.service';
import { CreateNewsDto } from 'src/news/dtos/createnews.dto';
import { UpdateNewsDto } from '../dtos/updatenews.dto';

@Controller('news')
export class NewsController {
    constructor(private newsService:NewsService){
        
    }

    @Get()
    async getAllNews(){
        const news = await this.newsService.findAllNews();
        return news;
    }

    @Post()
    createNewNews(@Body() createNewsDto: CreateNewsDto ){
        return this.newsService.createNews(createNewsDto);
    }

    //if you want to modify the entire database
    @Put(':id')
    async updatePutNewsById(
    @Param('id', ParseIntPipe) id:number,
    @Body() updateNewsDto:UpdateNewsDto,
    ){
        await this.newsService.updateNews(id,updateNewsDto);
    }

    //if you want to partially update the database
    @Patch(':id')
    async updatePatchNewsById(
    @Param('id', ParseIntPipe) id:number,
    @Body() updateNewsDto:UpdateNewsDto,
    ){
        await this.newsService.updateNews(id,updateNewsDto);
    }

    @Delete(':id')
    async deleteNewsById(
    @Param('id', ParseIntPipe) id:number){
        await this.newsService.deleteNews(id);
    }


}
