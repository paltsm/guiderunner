import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import News from 'src/typeorm/entities/news.entity';
import { CreateNewsParams, UpdateNewsParams } from 'src/utils/types';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class NewsService {
    constructor(@InjectRepository(News)
    private newsRepository:Repository<News>,
    private dataSource: DataSource){}

    async findAllNews(){
    return {news : await this.dataSource.getRepository(News).find()};
    }

    createNews( newsDetails: CreateNewsParams){
        const newNews = this.newsRepository.create({ 
            ...newsDetails 
        });
        return this.newsRepository.save(newNews);
    }
    updateNews(id: number, updateNewsDetails: UpdateNewsParams){
        return this.newsRepository.update({ id }, {...updateNewsDetails });
    }
    deleteNews(id:number){
        return this.newsRepository.delete({ id });
    }
}
