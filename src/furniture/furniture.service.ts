import { Injectable, NotFoundException } from '@nestjs/common';
import {furnitures} from './furniture.data.js'
import {v4 as uuid} from 'uuid'
import { UpdateFurnitureDto } from './dto/update-furniture.dto.js';

@Injectable()
export class FurnitureService {
    getFurnitures(){
        return furnitures
    }
    getFurniture(id:string){
        const furniture = furnitures.find((furniture)=>furniture.id === id)
        
        if(!furniture){
            throw new NotFoundException('Furniture not found')
        }
        
        return furniture
    }
    createFurniture(type:string,height:number,width:number,weight:number){
        const furniture = {
            id:uuid(),
            type,
            height,
            width,
            weight
        }
        furnitures.push(furniture)
        return furniture
    }
    updateFurniture(id:string,dto:UpdateFurnitureDto){
        const furniture = this.getFurniture(id)
        Object.assign(furniture,dto)
        return furniture
    }
    deleteFurniture(id:string){
        const furniture=this.getFurniture(id)
        const index = furnitures.indexOf(furniture)
        furnitures.splice(index,1)
        return furniture
    }
}
