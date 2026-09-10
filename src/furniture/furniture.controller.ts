import { Controller, Get, Param, Body,Delete,Patch,Post } from '@nestjs/common';
import { FurnitureService } from './furniture.service.js';
import {CreateFurnitureDto} from './dto/create-furniture.dto.js'
import {UpdateFurnitureDto} from './dto/update-furniture.dto.js'

@Controller('furniture')
export class FurnitureController {
    constructor(private readonly furnituresService: FurnitureService){}
    @Get()
    getFurnitures(){
        return this.furnituresService.getFurnitures()
    }

    @Get(':id')
    getFurniture(@Param('id') id:string){
        return this.furnituresService.getFurniture(id)
    }

    @Post()
    createFurniture(@Body() body:CreateFurnitureDto){
        return this.furnituresService.createFurniture(body.type,body.height,body.width,body.weight)
    }

    @Patch(':id')
    updateFurniture(
        @Param('id') id:string,
        @Body() dto:UpdateFurnitureDto
    ){
        return this.furnituresService.updateFurniture(id,dto)
    }

    @Delete(':id')
    deleteFurniture(@Param('id') id:string){
        return this.furnituresService.deleteFurniture(id)
    }
}
