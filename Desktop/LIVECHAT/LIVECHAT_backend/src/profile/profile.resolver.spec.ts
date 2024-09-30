import { Test, TestingModule } from '@nestjs/testing';
import { ProfileResolver } from './profile.resolver';
import { ProfileService } from './profile.service';
import { PrismaService } from '../prisma.service';
import { JwtModule, JwtService } from '@nestjs/jwt';

describe('ProfileResolver', () => {
  let resolver: ProfileResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProfileResolver,ProfileService,PrismaService,JwtService],
    }).compile();

    resolver = module.get<ProfileResolver>(ProfileResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
