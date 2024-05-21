import { Module } from '@nestjs/common';
import { MahasiwaService } from './mahasiwa.service';
import { MahasiwaController } from './mahasiwa.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports : [PrismaModule],
  controllers: [MahasiwaController],
  providers: [MahasiwaService],
})
export class MahasiwaModule {}
