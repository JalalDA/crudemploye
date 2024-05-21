import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MahasiwaService } from './mahasiwa.service';
import { CreateMahasiwaDto } from './dto/create-mahasiwa.dto';
import { UpdateMahasiwaDto } from './dto/update-mahasiwa.dto';

@Controller('mahasiswa')
export class MahasiwaController {
  constructor(private readonly mahasiwaService: MahasiwaService) {}

  @Post()
  create(@Body() createMahasiwaDto: CreateMahasiwaDto) {
    return this.mahasiwaService.create(createMahasiwaDto);
  }

  @Get()
  findAll() {
    return this.mahasiwaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mahasiwaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMahasiwaDto: UpdateMahasiwaDto) {
    return this.mahasiwaService.update(+id, updateMahasiwaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mahasiwaService.remove(+id);
  }
}
