import { Injectable } from '@nestjs/common';
import { PlayerEntity } from '../entity/playerEntity';
import { EntityRepository } from '@mikro-orm/mongodb';
import { InjectRepository } from '@mikro-orm/nestjs';

@Injectable()
export class PlayerService {
  constructor(
    @InjectRepository(PlayerEntity)
    private readonly playerRepository: EntityRepository<PlayerEntity>,
  ) {}

  async findAll(): Promise<PlayerEntity[]> {
    return this.playerRepository.findAll();
  }

  async findOne(name: string): Promise<PlayerEntity | null> {
    return this.playerRepository.findOne({ name });
  }

  async create(
    name: string,
    age: number,
    position: string,
    previousteam: string,
    currentTeam: string,
    earnings: number,
  ): Promise<PlayerEntity> {
    const player = new PlayerEntity(
      name,
      age,
      position,
      previousteam,
      currentTeam,
      earnings,
    );
    await this.playerRepository.persistAndFlush(player);
    return player;
  }

  async update(
    name: string,
    data: Partial<PlayerEntity>,
  ): Promise<PlayerEntity | null> {
    const player = await this.playerRepository.findOne({ name });
    if (!player) {
      return null;
    }
    Object.assign(player, data);
    await this.playerRepository.flush(player);
    return player;
  }

  async remove(name: string): Promise<boolean> {
    const player = await this.playerRepository.findOne({ name });
    if (!player) {
      return false;
    }
    await this.playerRepository.removeAndFlush(player);
    return true;
  }
}
