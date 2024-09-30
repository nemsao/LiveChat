import { Test, TestingModule } from '@nestjs/testing';
import { ServerResolver } from './server.resolver';
import { ServerService } from './server.service';
import { PrismaService } from '../prisma.service';
import { JwtService } from '@nestjs/jwt';

describe('ServerResolver', () => {
  let resolver: ServerResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
    
      providers: [ServerResolver,ServerService,PrismaService,JwtService],
    }).compile();

    resolver = module.get<ServerResolver>(ServerResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
