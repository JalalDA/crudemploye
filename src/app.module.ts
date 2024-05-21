import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { MahasiwaModule } from './mahasiwa/mahasiwa.module';
import { MahasiwaController } from './mahasiwa/mahasiwa.controller';
import { MahasiwaService } from './mahasiwa/mahasiwa.service';

@Module({
  imports: [PrismaModule, MahasiwaModule],
  controllers: [AppController, MahasiwaController],
  providers: [AppService, MahasiwaService],
})
export class AppModule {}
