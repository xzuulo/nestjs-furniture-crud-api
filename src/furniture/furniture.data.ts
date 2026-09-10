import { Furniture } from "./furniture.types.js";
import {v4 as uuid} from 'uuid'
export const furnitures: Furniture[]=[
    {id:uuid(),type:"chair",height:300,width:160,weight:20},
    {id:uuid(),type:"machine",height:200,width:100,weight:90},
    {id:uuid(),type:"bed",height:10,width:400,weight:24}
]