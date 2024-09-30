import { Module } from '@nestjs/common';
import { MemberService } from './member.service';
import { MemberResolver } from './member.resolver';
import { PrismaService } from '../prisma.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  providers: [MemberService, MemberResolver, PrismaService, JwtService],
  exports:[MemberService,MemberResolver]
})
export class MemberModule {}
