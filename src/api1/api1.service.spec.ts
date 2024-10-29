import { Test, TestingModule } from '@nestjs/testing';
import { Api1Service } from './api1.service';

describe('Api1Service', () => {
  let service: Api1Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Api1Service],
    }).compile();

    service = module.get<Api1Service>(Api1Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
