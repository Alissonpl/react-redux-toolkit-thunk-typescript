import { Module } from '@nestjs/common';
import { InfraModule } from 'src/infra/infra.module';

import { AuthModule } from './auth/auth.module';
import { ImageVideoModule } from './imageVideo/imageVideo.module'

@Module({
  imports: [AuthModule, ImageVideoModule, InfraModule],
})
export class V1Module { }
