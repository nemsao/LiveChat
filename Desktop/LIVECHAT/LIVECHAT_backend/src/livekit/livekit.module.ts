import { Module } from '@nestjs/common';
import { LivekitResolver } from './livekit.resolver';
import { LivekitService } from './livekit.service';

@Module({
  providers: [LivekitResolver, LivekitService],
  exports:[LivekitService,LivekitResolver]
})
export class LivekitModule {}
