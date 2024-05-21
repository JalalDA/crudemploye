import { Test, TestingModule } from '@nestjs/testing';
import { MahasiwaController } from './mahasiwa.controller';
import { MahasiwaService } from './mahasiwa.service';

describe('MahasiwaController', () => {
  let controller: MahasiwaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MahasiwaController],
      providers: [MahasiwaService],
    }).compile();

    controller = module.get<MahasiwaController>(MahasiwaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
