import { HttpException, Injectable } from '@nestjs/common';
import { CreateMahasiwaDto } from './dto/create-mahasiwa.dto';
import { UpdateMahasiwaDto } from './dto/update-mahasiwa.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MahasiwaService {
  constructor(private prisma: PrismaService) { }
  async create(createMahasiwaDto: CreateMahasiwaDto) {
    const createData = await this.prisma.mahasiswa.create({ data: createMahasiwaDto })
    return createData;
  }

  async findAll() {
    const getAllData = await this.prisma.mahasiswa.findMany()
    return getAllData;
  }

  async findOne(id: number) {
    const dataById = await this.prisma.mahasiswa.findUnique({ where: { id } })
    return dataById;
  }

  async update(id: number, data: UpdateMahasiwaDto) {
    const mahasiswa = await this.prisma.mahasiswa.findUnique({ where: { id } })
    if (!mahasiswa) {
      throw new HttpException("Mahasiswa not found", 404)
    }
    await this.prisma.mahasiswa.update({ where: { id }, data })
    return {
      msg: "Success udpate mahasiswa"
    };
  }

  async remove(id: number) {
    const mahasiswa = await this.prisma.mahasiswa.findUnique({ where: { id } })
    if (!mahasiswa) {
      throw new HttpException("Mahasiswa not found", 404)
    }
    await this.prisma.mahasiswa.delete({ where: { id } })
    return {
      msg: "Success delete mahasiswa"
    };
  }
}
