import { Test, TestingModule } from '@nestjs/testing';
import { Api1Resolver } from './api1.resolver';

describe('Api1Resolver', () => {
  let resolver: Api1Resolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Api1Resolver],
    }).compile();

    resolver = module.get<Api1Resolver>(Api1Resolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
