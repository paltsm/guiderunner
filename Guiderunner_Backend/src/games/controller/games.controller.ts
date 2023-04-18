import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put } from '@nestjs/common';
import { GamesService } from '../service/games.service';
import { CreateGameDto } from '../dtos/creategame.dto';
import { UpdateGameDto } from '../dtos/updategame.dto';



@Controller('games')
export class GamesController {
    constructor(private gameService:GamesService){
    }

    @Get()
    async getGames(){
        const games = await this.gameService.findGames();
        return games;
    }

    @Get(':id')
    findGame(@Param('id') id: number){
        return this.gameService.findGame(+id);
    }



    @Post()
    createGame(@Body() createGameDto: CreateGameDto){
        return this.gameService.createGame(createGameDto);
    }

    //if you want to modify the entire database
    @Put(':id')
    async updatePutGameById(
    @Param('id', ParseIntPipe) id:number,
    @Body() updateGameDto:UpdateGameDto,
    ){
        await this.gameService.updateGame(id,updateGameDto);
    }


    //if you want to partially update the database
    @Patch(':id')
    async updatePatchGameById(
    @Param('id', ParseIntPipe) id:number,
    @Body() updateGameDto:UpdateGameDto,
    ){
        await this.gameService.updateGame(id,updateGameDto);
    }

    @Delete(':id')
    async deleteAccountById(
    @Param('id', ParseIntPipe) id:number){
        await this.gameService.deleteGame(id);
    }






}
