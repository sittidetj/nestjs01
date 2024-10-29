import { Test, TestingModule } from '@nestjs/testing';
import { Api1Controller } from './api1.controller';
import { Api1Service } from './api1.service';

describe('Api1Controller', () => {
  let controller: Api1Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Api1Controller],
      providers: [Api1Service],
    }).compile();

    controller = module.get<Api1Controller>(Api1Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
