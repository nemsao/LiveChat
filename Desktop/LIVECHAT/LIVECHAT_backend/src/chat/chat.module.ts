import { Module } from '@nestjs/common';
import { ChatService } from './chat.service';
import { ChatResolver } from './chat.resolver';
import { PrismaService } from '../prisma.service';
import { JwtService } from '@nestjs/jwt';
import { ProfileService } from '../profile/profile.service';
import { ServerResolver } from '../server/server.resolver';
import { ServerService } from '../server/server.service';
import { REDIS_PUB_SUB, redisPubSubProvider } from '../redis-pubsub.provider';
import { MemberService } from '../member/member.service';

@Module({
  providers: [
    ChatService,
    ChatResolver,
    PrismaService,
    JwtService,
    ProfileService,
    ServerResolver,
    ServerService,
    redisPubSubProvider,
    MemberService,
  ],
  exports:[ChatService,ChatResolver]
})
export class ChatModule {}
