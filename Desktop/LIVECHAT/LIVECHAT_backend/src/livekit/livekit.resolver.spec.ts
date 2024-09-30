import { Test, TestingModule } from '@nestjs/testing';
import { LivekitResolver } from './livekit.resolver';
import { LivekitService } from './livekit.service';

describe('LivekitResolver', () => {
  let resolver: LivekitResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LivekitResolver,LivekitService],
    }).compile();

    resolver = module.get<LivekitResolver>(LivekitResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
