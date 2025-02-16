import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { PlayerService } from '../service/playerService';
import { PlayerEntity } from '../entity/playerEntity';

@Controller('players')
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}

  @Get()
  async findAll(): Promise<PlayerEntity[]> {
    return this.playerService.findAll();
  }

  @Get(':name')
  async findOne(@Param('name') name: string): Promise<PlayerEntity | null> {
    return this.playerService.findOne(name);
  }

  @Post()
  async create(@Body() player: PlayerEntity): Promise<PlayerEntity> {
    return this.playerService.create(player);
  }

  @Put(':name')
  async update(
    @Param('name') name: string,
    @Body() player: Partial<PlayerEntity>,
  ): Promise<PlayerEntity | null> {
    return this.playerService.update(name, player);
  }

  @Delete(':name')
  async remove(@Param('name') name: string): Promise<boolean> {
    return this.playerService.remove(name);
  }
}
