import { Module } from '@nestjs/common';
import { FurnitureController } from './furniture.controller.js';
import { FurnitureService } from './furniture.service.js';

@Module({
  controllers: [FurnitureController],
  providers: [FurnitureService]
})
export class FurnitureModule {}
