import { Test, TestingModule } from '@nestjs/testing';
import { ChatResolver } from './chat.resolver';
import { ChatService } from './chat.service';
import { MemberService } from '../member/member.service';
import { ProfileService } from '../profile/profile.service';
import { ServerResolver } from '../server/server.resolver';
import { redisPubSubProvider } from '../redis-pubsub.provider';
import { PrismaService } from '../prisma.service';
import { ServerService } from '../server/server.service';
import { JwtService } from '@nestjs/jwt';

describe('ChatResolver', () => {
  let resolver: ChatResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      
      providers: [ChatResolver,ChatService,MemberService,ProfileService,ServerResolver,redisPubSubProvider,PrismaService,ServerService,JwtService],
    }).compile();

    resolver = module.get<ChatResolver>(ChatResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
