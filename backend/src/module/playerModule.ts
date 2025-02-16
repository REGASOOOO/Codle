import { Module } from '@nestjs/common';
import { PlayerController } from '../controller/playerController';
import { PlayerService } from '../service/playerService';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { PlayerEntity } from '../entity/playerEntity';

@Module({
  imports: [MikroOrmModule.forFeature({ entities: [PlayerEntity] })],
  controllers: [PlayerController],
  providers: [PlayerService],
  exports: [PlayerService],
})
export class PlayerModule {}
