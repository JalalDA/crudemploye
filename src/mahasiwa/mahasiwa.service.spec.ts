import { Test, TestingModule } from '@nestjs/testing';
import { MahasiwaService } from './mahasiwa.service';

describe('MahasiwaService', () => {
  let service: MahasiwaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MahasiwaService],
    }).compile();

    service = module.get<MahasiwaService>(MahasiwaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
